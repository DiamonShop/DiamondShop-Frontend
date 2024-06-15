import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

const ProductManagement = () => {
    // Sample product data
    const initialProducts = [
        { id: 1, name: 'Product 1', price: 100, quantity: 10, status: 'Available' },
        { id: 2, name: 'Product 2', price: 150, quantity: 0, status: 'Out of Stock' },
        { id: 3, name: 'Product 3', price: 200, quantity: 5, status: 'Available' }
    ];

    const [products, setProducts] = useState(initialProducts);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleEditProduct = (id) => {
        const product = products.find(p => p.id === id);
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleSaveProduct = (event) => {
        event.preventDefault();
        const updatedProducts = products.map(product =>
            product.id === selectedProduct.id ? selectedProduct : product
        );
        setProducts(updatedProducts);
        setShowModal(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSelectedProduct({
            ...selectedProduct,
            [name]: name === 'price' || name === 'quantity' ? parseFloat(value) : value
        });
    };

    useEffect(() => {
        renderProductList();
    }, [products]);

    const renderProductList = () => {
        return products.map(product => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.status}</td>
                <td>
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleEditProduct(product.id)}
                    >
                        Edit
                    </Button>
                </td>
            </tr>
        ));
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProductList()}
                </tbody>
            </table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSaveProduct}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                value={selectedProduct?.id}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={selectedProduct?.name || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={selectedProduct?.price || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantity"
                                value={selectedProduct?.quantity || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                type="text"
                                name="status"
                                value={selectedProduct?.status || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
};

export default ProductManagement;
