import React from "react";

const ShopSidebar = () => {
  return (
    <div className="shop_sidebar">
      <div className="sidebar_item sidebar_category">
        <h3 className="sidebar_title">Categories</h3>
        <ul className="category_list">
          <li className="category_item">
            <i className="bx bxs-pizza" />
            <span>Pizza</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-baguette" />
            <span>Burgers</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-pizza" />
            <span>Hots Drinks</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-bowl-hot" />
            <span>Drinks</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-pizza" />
            <span>Pasta</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-food-menu" />
            <span>Uncategorized</span>
          </li>
        </ul>
      </div>

      <div className="sidebar_item sidebar_form">
        <input type="text" placeholder="Search products...." />
        <i className="bx bx-search-alt-2" />
      </div>

      <div className="sidebar_item sidebar_history">
        <h3 className="sidebar_title">Recently watched</h3>
        <div className="history_list">
          <div className="history_item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655710062/Shop/m9xnxgtsphlufstu59tk.png"
                alt=""
              />
            </div>
            <div className="infor">
              <div className="infor-start">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </div>
              <p className="infor-name">Vegge Lover</p>
              <p className="infor-price">$9.13</p>
            </div>
          </div>
          <div className="history_item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655710062/Shop/m9xnxgtsphlufstu59tk.png"
                alt=""
              />
            </div>
            <div className="infor">
              <div className="infor-start">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </div>
              <p className="infor-name">Vegge Lover</p>
              <p className="infor-price">$9.13</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;