-- Create Sellers Table
CREATE TABLE Sellers (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    rating DECIMAL(3, 2)
);

-- Create Items Table
CREATE TABLE Items (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    sellerId INT,
    FOREIGN KEY (sellerId) REFERENCES Sellers(id)
);

-- Insert Data into Sellers Table
INSERT INTO Sellers (id, name, rating) VALUES
(1, 'Penny', 4.2),
(2, 'Zeeshan', 4.0),
(3, 'Daniel', 3.8),
(4, 'Andreas', 4.8),
(5, 'Erik', 3.0);

-- Insert Data into Items Table
INSERT INTO Items (id, name, sellerId) VALUES
(1, 'Notebook', 1),
(2, 'Pencil', 1),
(3, 'Stapler', 2),
(4, 'Marker', 3),
(5, 'Pen', 4),
(6, 'Eraser', 5);

-- Output Query
SELECT Items.name AS Item, Sellers.name AS Seller
FROM Items
FULL OUTER JOIN Sellers ON Items.sellerId = Sellers.id
WHERE Sellers.rating > 4;