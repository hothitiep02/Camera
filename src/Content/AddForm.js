import React, { Component } from "react";
import Data_pd from "./data_pd"; 

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.list = Data_pd ? Data_pd("products") : (JSON.parse(localStorage.getItem("products")) || []);

        this.state = {
            products: this.list,
            id: this.list.length > 0 ? parseInt(this.list[this.list.length - 1].id) + 1 : 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        event.preventDefault();
    }

    saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    handleSubmit(event) {
        event.preventDefault();

        let products = JSON.parse(localStorage.getItem("products")) || [];

        let newId = products.length > 0 ? parseInt(products[products.length - 1].id) + 1 : 1;

        let newProduct = {
            id: newId,
            name: this.state.name,
            name_category: this.state.name_category,
            code: this.state.code,
            image: this.state.image,
            price: this.state.price,
            old_price: this.state.old_price,
        };

        products.push(newProduct);

        this.saveProducts(products);

        this.setState({
            products,
            id: newId + 1,
            name: "",
            name_category: "Thời trang nam",
            code: "",
            image: "",
            price: "",
            old_price: "",
        });

        alert("Một sản phẩm đã được thêm vào!");
    }

    renderProductsByCategory(categoryName) {
        const filtered = this.state.products.filter(p => p.name_category === categoryName);

        return (
            <div className="row">
                {filtered.map(product => (
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="card h-100 text-center">
                            <img
                                src={product.image || "https://via.placeholder.com/300x200.png?text=No+Image"}
                                alt={product.name}
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h6 className="card-title">{product.name}</h6>
                                <p style={{ fontSize: "12px", color: "#888" }}>{product.code}</p>
                                <p style={{ color: "red", fontWeight: "bold" }}>{product.price} đ</p>
                                {product.old_price && (
                                    <p style={{ textDecoration: "line-through", fontSize: "12px", color: "#888" }}>
                                        {product.old_price} đ
                                    </p>
                                )}
                                <button className="btn btn-warning">Đặt mua</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <h2>Thêm Sản Phẩm</h2>
                <div className="row">
                    <div className="col-md-4">
                        <form id="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Dép"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name_category">Category</label>
                                <select
                                    className="form-control"
                                    id="name_category"
                                    name="name_category"
                                    value={this.state.name_category}
                                    onChange={this.handleChange}
                                >
                                    <option value="Thời trang nam">Nam</option>
                                    <option value="Thời trang nữ">Nữ</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="code">Code</label>
                                <input
                                    className="form-control"
                                    id="code"
                                    name="code"
                                    placeholder="XXXXXXX"
                                    value={this.state.code}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Image URL</label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    className="form-control"
                                    placeholder="https://example.com/image.jpg"
                                    value={this.state.image}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    placeholder="10000"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="old_price">Old Price</label>
                                <input
                                    className="form-control"
                                    id="old_price"
                                    name="old_price"
                                    placeholder="15000"
                                    value={this.state.old_price}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Save
                            </button>
                        </form>
                    </div>

                    <div className="col-md-8">
                        <h4><b>THỜI TRANG NAM</b></h4>
                        {this.renderProductsByCategory("Thời trang nam")}
                        <hr />
                        <h4><b>THỜI TRANG NỮ</b></h4>
                        {this.renderProductsByCategory("Thời trang nữ")}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddForm;
