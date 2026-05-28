import { useEffect, useState } from "react";
import style from "./ProductTask.module.css";
const ProductTask = () => {
  const [selecteProduct, setSelectProduct] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function getProducts() {
      try {
        let resp = await fetch("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        let data = await resp.json();
        console.log(data);
        setSelectProduct(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
    return () => controller.abort();
  }, []);

  const openPopUp = (ele) => {
    setSelectedProducts(ele);
  };

  const closePopUp = () => {
    setSelectedProducts(null);
  };

  return (
    <div className={style.container}>
      <h1 className={style.heading}>All Products</h1>
      {selecteProduct.length === 0 ? (
        <p className={style.empty}>No Product Find</p>
      ) : (
        <section className={style.grid}>
          {selecteProduct.map((ele) => {
            return (
              <div
                key={ele.id}
                className={style.card}
                onClick={() => openPopUp(ele)}
              >
                <div className={style.imageBox}>
                  <img
                    src={ele.thumbnail}
                    alt={ele.title}
                    height={200}
                    width={200}
                  />
                </div>
                <div className={style.content}>
                  <h2 className={style.title}>{ele.title}</h2>
                  <p className={style.description}>{ele.description}</p>
                  <p className={style.price}>{ele.price}</p>
                </div>
              </div>
            );
          })}
        </section>
      )}

      {selectedProducts && (
        <div className={style.modalOverlay} onClick={closePopUp}>
          <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            <button className={style.closeBtn} onClick={closePopUp}>
              x
            </button>

            <div className={style.modalImageBox}>
              <img
                src={selectedProducts.thumbnail}
                alt={selectedProducts.title}
                className={style.modalImage}
              />
            </div>

            <div className={style.modalContent}>
              <h2 className={style.modalTitle}>{selectedProducts.title}</h2>
              <p className={style.brand}>{selectedProducts.brand}</p>
              <p className={style.modalPrice}>{selectedProducts.price}</p>
              <p className={style.modalDesc}>{selectedProducts.description}</p>

              {/* <div className={style.colorDots}>
                <span className={style.dotDark}></span>
                <span className={style.dotRed}></span>
              </div> */}

              <button className={style.cartBtn}>ADD TO CART</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTask;
