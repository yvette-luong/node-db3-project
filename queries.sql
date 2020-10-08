-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT product.ProductName, category.CategoryName
FROM product
JOIN category ON product.CategoryId = category.Id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
--Order is a reserved word, so when you are using a word that the language uses for something else, you have to wrap it in brackets
SELECT [o].id, [o].ShipName,  s.CompanyName
FROM [order] as o
JOIN shipper as s ON shipper.Id = [o].ShipVia
WHERE [o].orderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, o.OderId
from orderDetail as o
JOIN product as p ON p.id = o.productId
WHERE o.orderId = 10251; 
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT [o].id, c.CompanyName, e.LastName
FROM [order] as o
JOIN customer as c ON [o].CustomerId = c.Id
JOIN employee as e ON e.id = [o].EmployeeId
