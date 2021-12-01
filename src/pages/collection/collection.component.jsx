import React from "react";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";
import { useParams } from "react-router";

function CollectionPage() {
  const { category } = useParams();

  const collection = useSelector((state) => selectCollection(category)(state));

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
