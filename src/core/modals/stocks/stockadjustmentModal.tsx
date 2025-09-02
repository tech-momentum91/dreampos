import React from "react";
import { Link } from "react-router-dom";
import CommonSelect from "../../../components/select/common-select";
import { stockImg02 } from "../../../utils/imagepath";

const StockadjustmentModal = () => {
  const [selectedWarehouse, setSelectedWarehouse] = React.useState(null);
  const [selectedType, setSelectedType] = React.useState(null);
  const [selectedPerson, setSelectedPerson] = React.useState(null);

  const optionsChoose = [
    { value: "choose", label: "Choose" },
    { value: "lobarHandy", label: "Lobar Handy" },
    { value: "quaintWarehouse", label: "Quaint Warehouse" },
  ];

  const optionsAddition = [{ value: "addition", label: "Addition" }];

  const optionsStevenGravely = [
    { value: "choose", label: "Choose" },
    { value: "steven", label: "Steven" },
    { value: "gravely", label: "Gravely" },
  ];
  return (
    <div>
      {/* Add Adjustment */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Add Adjustment</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body custom-modal-body">
                  <form>
                    <div className="input-blocks search-form">
                      <label>Product</label>
                      <input type="text" className="form-control" />
                      <i className="feather icon-search" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Warehouse</label>
                          <CommonSelect
                            className="w-100"
                            options={optionsChoose}
                            value={selectedWarehouse}
                            onChange={(e:any) => setSelectedWarehouse(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Reference Number</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="modal-body-table">
                          <div className="table-responsive">
                            <table className="table  datanew">
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>SKU</th>
                                  <th>Category</th>
                                  <th>Qty</th>
                                  <th>Type</th>
                                  <th className="no-sort">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="productimgname">
                                      <Link
                                        to="#"
                                        className="product-img stock-img"
                                      >
                                        <img
                                          src={stockImg02}
                                          alt="product"
                                        />
                                      </Link>
                                      <Link to="#">Nike Jordan</Link>
                                    </div>
                                  </td>
                                  <td>PT002</td>
                                  <td>Nike</td>
                                  <td>
                                    <div className="product-quantity">
                                      <span className="quantity-btn">
                                        <i className="feather icon-minus-circle feather-search" />
                                      </span>
                                      <input
                                        type="text"
                                        className="quntity-input"
                                        defaultValue={2}
                                      />
                                      <span className="quantity-btn">
                                        +
                                        <i className="feather icon-plus-circle plus-circle" />
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <CommonSelect
                                      className="w-100"
                                      options={optionsAddition}
                                      value={selectedType}
                                      onChange={(e) => setSelectedType(e.value)}
                                      placeholder="Choose"
                                      filter={false}
                                    />
                                  </td>
                                  <td className="action-table-data">
                                    <div className="edit-delete-action">
                                      <Link
                                        className="me-2 p-2"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-units"
                                      >
                                        <i className="feather icon-edit feather-edit" />
                                      </Link>
                                      <Link className="confirm-text p-2" to="#">
                                        <i className="feather icon-trash-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-blocks">
                          <label>Responsible Person</label>
                          <CommonSelect
                            className="w-100"
                            options={optionsStevenGravely}
                            value={selectedPerson}
                            onChange={(e) => setSelectedPerson(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-blocks summer-description-box">
                        <label>Notes</label>
                        <textarea className="form-control" defaultValue={""} />
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-submit">
                        Create Adjustment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Adjustment */}
      {/* Edit Adjustment */}
      <div className="modal fade" id="edit-units">
        <div className="modal-dialog modal-dialog-centered stock-adjust-modal">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Edit Adjustment</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body custom-modal-body">
                  <form>
                    <div className="input-blocks search-form">
                      <label>Product</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Nike Jordan"
                      />
                      <i className="feather icon-search" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Warehouse</label>
                          <CommonSelect
                            className="w-100"
                            options={optionsChoose}
                            value={selectedWarehouse}
                            onChange={(e) => setSelectedWarehouse(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-blocks">
                          <label>Reference Number</label>
                          <input type="text" defaultValue="PT002" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="modal-body-table">
                          <div className="table-responsive">
                            <table className="table  datanew">
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>SKU</th>
                                  <th>Category</th>
                                  <th>Qty</th>
                                  <th>Type</th>
                                  <th className="no-sort">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="productimgname">
                                      <Link
                                        to="#"
                                        className="product-img stock-img"
                                      >
                                        <img
                                          src={stockImg02}
                                          alt="product"
                                        />
                                      </Link>
                                      <Link to="#">Nike Jordan</Link>
                                    </div>
                                  </td>
                                  <td>PT002</td>
                                  <td>Nike</td>
                                  <td>
                                    <div className="product-quantity">
                                      <span className="quantity-btn">
                                        <i className="feather icon-minus-circle feather-search" />
                                      </span>
                                      <input
                                        type="text"
                                        className="quntity-input"
                                        defaultValue={2}
                                      />
                                      <span className="quantity-btn">
                                        +
                                        <i className="feather icon-plus-circle plus-circle" />
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    <CommonSelect
                                      className="w-100"
                                      options={optionsAddition}
                                      value={selectedType}
                                      onChange={(e) => setSelectedType(e.value)}
                                      placeholder="Choose"
                                      filter={false}
                                    />
                                  </td>
                                  <td className="action-table-data">
                                    <div className="edit-delete-action">
                                      <Link
                                        className="me-2 p-2"
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-units"
                                      >
                                        <i className="feather icon-edit feather-edit" />
                                      </Link>
                                      <Link className="confirm-text p-2" to="#">
                                        <i className="feather icon-trash-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-blocks">
                          <label>Responsible Person</label>
                          <CommonSelect
                            className="w-100"
                            options={optionsStevenGravely}
                            value={selectedPerson}
                            onChange={(e) => setSelectedPerson(e.value)}
                            placeholder="Choose"
                            filter={false}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-blocks summer-description-box">
                        <label>Notes</label>
                        <textarea
                          className="form-control"
                          defaultValue={
                            "The Jordan brand is owned by Nike (owned by the Knight family), as, at the time, the company was building its strategy to work with athletes to launch shows that could inspire consumers.Although Jordan preferred Converse and Adidas, they simply could not match the offer Nike made. "
                          }
                        />
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-submit">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Adjustment */}
      {/* View Notes */}
      <div className="modal fade" id="view-notes">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Notes</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body custom-modal-body">
                  <p>
                    The Jordan brand is owned by Nike (owned by the Knight
                    family), as, at the time, the company was building its
                    strategy to work with athletes to launch shows that could
                    inspire consumers.Although Jordan preferred Converse and
                    Adidas, they simply could not match the offer Nike made.
                    Jordan also signed with Nike because he loved the way they
                    wanted to market him with the banned colored shoes. Nike
                    promised to cover the fine Jordan would receive from the
                    NBA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Notes */}
    </div>
  );
};

export default StockadjustmentModal;
