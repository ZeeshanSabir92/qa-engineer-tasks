const { test, expect } = require('@playwright/test');

const PETS_API_ENDPOINT = 'https://petstore.swagger.io/v2/pet';
const DOG_PHOTO = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg';

const PET_DOG_DATA = {
	id: 0,
	category: {
		id: 0,
		name: "Dogs"
	},
	name: "Johnny",
	photoUrls: [
		DOG_PHOTO
	],
	tags: [
		{
			id: 0,
			name: "german shepherd"
		}
	],
	status: "available"
};

const INVALID_PET_DATA = {
	id: 0,
	category: "invalid_category",  // Invalid category format
	name: "doggie",
	photoUrls: [
		"string"
	],
	tags: [
		{
			id: 0,
			name: "string"
		}
	],
	status: "available"
};

test.describe('PetStore API Tests', () => {
	test('Add a new Pet Dog - Success', async ({ request }) => {
		const response = await request.post(PETS_API_ENDPOINT, {
			data: PET_DOG_DATA
		});
		const responseBody = await response.json();
		expect(response.ok()).toBeTruthy();
		expect(responseBody.id).toBeGreaterThan(0);
		expect(responseBody.name).toBe(PET_DOG_DATA.name);
	});

	test('Add a new Pet Dog and Get by Pet ID - Success', async ({ request }) => {
		// Add new pet first
		const addResponse = await request.post(PETS_API_ENDPOINT, {
			data: PET_DOG_DATA
		});
		const addedPet = await addResponse.json();
		expect(addResponse.ok()).toBeTruthy();
		expect(addedPet.id).toBeGreaterThan(0);
		expect(addedPet.name).toBe(PET_DOG_DATA.name);
		const petId = addedPet.id;

		// Fetch pet details
		const url = `${PETS_API_ENDPOINT}/${petId}`;
		const getResponse = await request.get(url);
		const fetchedPet = await getResponse.json();

		expect(getResponse.ok()).toBeTruthy();
		expect(fetchedPet.name).toBe(PET_DOG_DATA.name);
	});

	test('Add a new pet - Invalid Data', async ({ request }) => {
		const response = await request.post(PETS_API_ENDPOINT, {
			data: INVALID_PET_DATA
		});
		expect(response.ok()).toBeFalsy();
		expect(response.status()).toBe(500);
	});

	test('Fetch pet details by Invalid ID', async ({ request }) => {
		const invalidPetId = 9999999999; // Assuming this ID does not exist
		const response = await request.get(`${PETS_API_ENDPOINT}/${invalidPetId}`);
		expect(response.ok()).toBeFalsy();
		expect(response.status()).toBe(404);
	});
});
