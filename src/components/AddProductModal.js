import React from 'react';
import { Button, Input, InputNumber, Select, Upload } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddProductModal = ({
    newProductDiamond, closeAddModal, handleNewDiamondChange, addNewDiamondProduct,
    setNewProductDiamond, uploadProps
}) => (
    <div className="admin-page-add-product-overlay">
        <div className="admin-page-add-product-modal">
            <button className="admin-page-add-product-close-button" onClick={closeAddModal}>&times;</button>
            <div className="admin-page-add-product-modal-content">
                <div className="admin-page-add-product-info-column">
                    <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Thêm kim cương</h2>
                    <form onSubmit={addNewDiamondProduct}>
                        <div className="admin-page-add-product-form-group-row">
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="productId">ID</label>
                                <Input
                                    id="productId"
                                    name="productId"
                                    value={newProductDiamond.productId}
                                    readOnly
                                />
                            </div>
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="diameterMM">Đường kính (mm)</label>
                                <Input
                                    id="diameterMM"
                                    name="diameterMM"
                                    value={newProductDiamond.diameterMM}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="admin-page-add-product-form-group">
                            <label htmlFor="productName">Tên sản phẩm</label>
                            <Input
                                id="productName"
                                name="productName"
                                placeholder="Nhập tên sản phẩm"
                                value={newProductDiamond.productName}
                                onChange={e => setNewProductDiamond({ ...newProductDiamond, productName: e.target.value })}
                                required
                            />
                        </div>
                        <div className="admin-page-add-product-form-group-row">
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="quantity">Số lượng</label>
                                <InputNumber
                                    id="quantity"
                                    name="quantity"
                                    min={0}
                                    max={100000}
                                    style={{ height: '46.7px', width: '140px' }}
                                    value={newProductDiamond.quantity}
                                    onChange={value => setNewProductDiamond({ ...newProductDiamond, quantity: value })}
                                    required
                                />
                            </div>
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="carat">Carat</label>
                                <InputNumber
                                    id="carat"
                                    name="carat"
                                    placeholder="Carat"
                                    min={0.01}
                                    value={newProductDiamond.carat}
                                    style={{ height: '46.7px', width: '140px' }}
                                    onChange={value => setNewProductDiamond({ ...newProductDiamond, carat: value })}
                                    required
                                />
                            </div>
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="markupRate">Tỉ lệ áp giá</label>
                                <InputNumber
                                    id="markupRate"
                                    name="markupRate"
                                    placeholder="Tỉ lệ áp giá"
                                    min={0.1}
                                    value={newProductDiamond.markupRate}
                                    style={{ height: '46.7px', width: '140px' }}
                                    onChange={value => setNewProductDiamond({ ...newProductDiamond, markupRate: value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="admin-page-add-product-form-group-row">
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="color">Màu sắc</label>
                                <Select
                                    id="color"
                                    name="color"
                                    value={newProductDiamond.color}
                                    style={{ height: '46.7px' }}
                                    onChange={value => setNewProductDiamond({ ...newProductDiamond, color: value })}
                                    options={[
                                        { value: 'D', label: 'D' },
                                        { value: 'E', label: 'E' },
                                        { value: 'F', label: 'F' }
                                    ]}
                                    required
                                />
                            </div>
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="clarity">Độ tinh khiết</label>
                                <Select
                                    id="clarity"
                                    name="clarity"
                                    value={newProductDiamond.clarity}
                                    style={{ height: '46.7px' }}
                                    onChange={value => setNewProductDiamond({ ...newProductDiamond, clarity: value })}
                                    options={[
                                        { value: 'IF', label: 'IF' },
                                        { value: 'VVS1', label: 'VVS1' },
                                        { value: 'VVS2', label: 'VVS2' },
                                        { value: 'VS1', label: 'VS1' },
                                        { value: 'VS2', label: 'VS2' }
                                    ]}
                                    required
                                />
                            </div>
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="cut">Cắt</label>
                                <Select
                                    id="cut"
                                    name="cut"
                                    value={newProductDiamond.cut}
                                    style={{ height: '46.7px' }}
                                    onChange={value => setNewProductDiamond({ ...newProductDiamond, cut: value })}
                                    options={[
                                        { value: 'EX', label: 'EX' },
                                        { value: 'VG', label: 'VG' },
                                        { value: 'G', label: 'G' }
                                    ]}
                                    required
                                />
                            </div>
                        </div>
                        <div className="admin-page-add-product-form-group-row">
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="basePrice">Giá gốc sản phẩm</label>
                                <InputNumber
                                    id="basePrice"
                                    name="basePrice"
                                    placeholder="Nhập giá gốc sản phẩm"
                                    min={0}
                                    style={{ height: '46.7px', width: '220px' }}
                                    value={newProductDiamond.basePrice}
                                    onChange={value => setNewProductDiamond({ ...newProductDiamond, basePrice: value })}
                                    required
                                />
                            </div>
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="markupPrice">Giá bán</label>
                                <InputNumber
                                    id="markupPrice"
                                    name="markupPrice"
                                    placeholder="Giá bán"
                                    style={{ height: '46.7px', width: '220px' }}
                                    value={newProductDiamond.markupPrice}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="admin-page-add-product-form-group-row">
                            <div className="admin-page-add-product-form-group">
                                <label htmlFor="imageFiles">Hình ảnh sản phẩm</label>
                                <Upload {...uploadProps}>
                                    <Button icon={<UploadOutlined />}>Chọn hình ảnh</Button>
                                </Upload>
                            </div>
                        </div>
                        <div className="admin-page-add-product-form-group">
                            <label htmlFor="description">Mô tả sản phẩm</label>
                            <ReactQuill
                                id="description"
                                name="description"
                                value={newProductDiamond.description}
                                onChange={value => setNewProductDiamond({ ...newProductDiamond, description: value })}
                            />
                        </div>
                        <div className="admin-page-add-product-form-group">
                            <Button type="primary" htmlType="submit">Thêm Mới</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default AddProductModal;
