CREATE TABLE login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(50) NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
INSERT INTO login (role, username, password) VALUES
    ('user', 'john_doe', 'hashed_password_123'),
    ('admin', 'admin_user', 'hashed_password_admin'),
    ('user', 'jane_smith', 'hashed_password_456');

CREATE TABLE suppliers (
    id INT PRIMARY KEY,
    supplier_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact_no CHAR(10) NOT NULL,
    FOREIGN KEY (id) REFERENCES login(id),
    CONSTRAINT chk_contact_no CHECK (LENGTH(contact_no) = 10)
);
INSERT INTO suppliers (id, supplier_name, email, contact_no) VALUES
    (1, 'Supplier A', 'supplierA@example.com', '1234567890'),
    (2, 'Supplier B', 'supplierB@example.com', '9876543210'),
    (3, 'Supplier C', 'supplierC@example.com', '9976543210');



CREATE TABLE buyers (
    id INT PRIMARY KEY,
    buyer_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact_no CHAR(10) NOT NULL,
    FOREIGN KEY (id) REFERENCES login(id),
    CONSTRAINT chk_contact_no1 CHECK (LENGTH(contact_no) = 10)
);
INSERT INTO buyers (id, buyer_name, email, contact_no) VALUES
    (1, 'Buyer X', 'buyerX@example.com', '1112223333'),
    (2, 'Buyer Y', 'buyerY@example.com', '4445556666'),
    (3, 'Buyer z', 'buyerz@example.com', '5555556666');



CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    CONSTRAINT chk_price CHECK (price >= 0),
    CONSTRAINT chk_unit CHECK (unit IN ('kg', 'g', 'lb', 'oz', 'liter', 'ml', 'piece'))
);
INSERT INTO products (product_name, price, unit) VALUES
    ('Milk', 1.99, 'liter'),
    ('paneer', 0.50, 'kg'),
    ('ghee', 2.49, 'kg');



CREATE TABLE products_suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    supplier_id INT,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
INSERT INTO products_suppliers (product_id, supplier_id, price) VALUES
    (1, 1, 1.75),
    (3, 2, 0.40),
    (2, 3, 2.00);


CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    buyer_id INT,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES buyers(id)
);
INSERT INTO orders (buyer_id, total_amount, order_date) VALUES
    (1, 24.50, '2023-08-10'),
    (2, 15.75, '2023-08-11'),
    (3, 8.25, '2023-08-12');



CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products_suppliers(product_id),
    CHECK (quantity > 0),
    CHECK (price >= 0)
);
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
    (1, 1, 2, 3.50),
    (2, 3, 1, 2.00),
    (3, 2, 3, 1.20);



CREATE TABLE payment (
    id INT PRIMARY KEY,
    payment_date DATE,
    buyer_id INT,
    order_id INT,
    payment_type VARCHAR(255),
    total_amount DECIMAL(10, 2),
    transaction_number VARCHAR(50),
    FOREIGN KEY (buyer_id) REFERENCES buyers(id)
);
INSERT INTO payment (id, payment_date, buyer_id, order_id, payment_type, total_amount, transaction_number) VALUES
    (1, '2023-08-14', 1, 1, 'Credit Card', 24.50, 'CC123456'),
    (2, '2023-08-15', 2, 2, 'PayPal', 15.75, 'PP789012'),
    (3, '2023-08-16', 3, 3, 'Debit Card', 8.25, 'DC345678');





