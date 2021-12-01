import React from "react";

import { connect } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectShopCollections } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectShopCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
