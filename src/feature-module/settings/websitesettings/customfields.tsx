import { Link } from "react-router-dom";
import EditCustomFields from "../../../core/modals/settings/editcustomfields";
import SettingsSideBar from "../settingssidebar";
import CollapesIcon from "../../../components/tooltip-content/collapes";
import AddCustomFields from "../../../core/modals/settings/addcustomfields";
import RefreshIcon from "../../../components/tooltip-content/refresh";
import DeleteModal from "../../../components/delete-modal";

const CustomFields = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content settings-content">
          <div className="page-header settings-pg-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Settings</h4>
                <h6>Manage your settings on portal</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="settings-wrapper d-flex">
                <SettingsSideBar />
                <div className="card flex-fill mb-0 w-50">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h4>Custom Fields</h4>
                    <div className="page-btn">
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add-custom-field"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add New Field
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table border">
                        <thead className="thead-light">
                          <tr>
                            <th>Module</th>
                            <th>Label</th>
                            <th>Type</th>
                            <th>Default Value</th>
                            <th>Required/Disable</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h6>Product</h6>
                            </td>
                            <td>Weight</td>
                            <td>Number</td>
                            <td>0</td>
                            <td>Required</td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Customer</h6>
                            </td>
                            <td>Type</td>
                            <td>Select</td>
                            <td>Regular</td>
                            <td>Required</td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Supplier</h6>
                            </td>
                            <td>Type</td>
                            <td>Select</td>
                            <td>-</td>
                            <td>Required</td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6>Biller</h6>
                            </td>
                            <td>Type</td>
                            <td>Select</td>
                            <td>Utility</td>
                            <td>Required</td>
                            <td>
                              <span className="badge badge-success d-inline-flex align-items-center badge-xs">
                                <i className="ti ti-point-filled me-1" />
                                Active
                              </span>
                            </td>
                            <td className="action-table-data">
                              <div className="edit-delete-action">
                                <Link
                                  className="me-2 p-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-custom-field"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  className="p-2"
                                  to="#;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete-modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          {/* <p className="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p> */}
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>

      <AddCustomFields />
      <EditCustomFields />
      <DeleteModal />
    </>
  );
};

export default CustomFields;
