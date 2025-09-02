import  { useState } from "react";
import { contact_data } from "../../core/json/contactsData";
import PrimeDataTable from "../../components/data-table";
import { Link } from "react-router-dom";
import TableTopHead from "../../components/table-top-head";
import SearchFromApi from "../../components/data-table/search";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";

const Contacts = () => {
  const data = contact_data;
  const [listData, _setListData] = useState<any[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRecords, _setTotalRecords] = useState<any>(5);
  const [rows, setRows] = useState<number>(10);
  const [_searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const [selectedContactType, setSelectedContactType] = useState(null);

  const columns = [
    {
      header: "Name",
      field: "Name",
      body: (text: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <img src={text.image} alt="product" />
          </Link>
          <Link to="#">{text.Name}</Link>
        </div>
      ),
      sortable: false,
    },
    {
      header: "Email",
      field: "Email",
      sortable: false,
    },

    {
      header: "Phone",
      field: "Phone",
      sortable: false,
    },
    {
      header: "Role",
      field: "Role",
      sortable: false,
    },
    {
      header: "Status",
      field: "Status",
      body: (text: any) => (
        <>
          <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 text-white bg-success fs-10">
            <i className="ti ti-point-filled me-1 fs-11" />
            {text.Status}
          </span>
        </>
      ),
      sortable: false,
    },

    {
      header: "Action",
      field: "action",
      body: () => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-contact"
          >
            <i  className="feather icon-edit feather-edit" />
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
            className="p-2 d-flex align-items-center border rounded"
            to="#"
          >
            <i className="feather icon-trash-2" />
          </Link>
        </div>
      ),
      sortable: false,
    },
  ];

  const contactType = [
    { label: "Admin", value: "1" },
    { label: "Salesman", value: "2" },
  ];
  const handleSearch = (value: any) => {
    setSearchQuery(value);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Contacts</h4>
                <h6>Manage your contacts</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                to="#"
                className="btn btn-primary text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-contact"
              >
                <i className="ti ti-circle-plus me-1" />
                Add Contact
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <PrimeDataTable
                  column={columns}
                  data={listData}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0 text-gray-9">
            2014 - 2025 © DreamsPOS. All Right Reserved
          </p>
          <p>
            Designed &amp; Developed by{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      <>
        {/* Add Customer */}
        <div className="modal fade" id="add-contact">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Add Contact</h4>
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
              <form action="contacts.html">
                <div className="modal-body">
                  <div className="new-employee-field">
                    <div className="profile-pic-upload">
                      <div className="profile-pic">
                        <span>
                          <i className="feather icon-plus-circle plus-down-add" />
                          Add Image
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="image-upload mb-0">
                          <input type="file" />
                          <div className="image-uploads">
                            <h4>Upload Image</h4>
                          </div>
                        </div>
                        <p className="mt-2">JPEG, PNG up to 2 MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <label className="form-label">
                        First Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label className="form-label">
                        Last Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Email<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Phone<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="tel" className="form-control" />
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Contact Type <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={contactType}
                          value={selectedContactType}
                          onChange={(e) => setSelectedContactType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="user2"
                          className="check"
                          //defaultChecked=""
                        />
                        <label htmlFor="user2" className="checktoggle">
                          {" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Add Contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Customer */}
        {/* Edit Customer */}
        <div className="modal fade" id="edit-contact">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="page-title">
                  <h4>Edit Contact</h4>
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
              <form action="contacts.html">
                <div className="modal-body">
                  <div className="new-employee-field">
                    <div className="profile-pic-upload image-field">
                      <div className="profile-pic p-2">
                        <img
                          src="./assets/img/users/user-41.jpg"
                          className="object-fit-cover h-100 rounded-1"
                          alt="user"
                        />
                        <button type="button" className="close rounded-1">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="mb-3">
                        <div className="image-upload mb-0">
                          <input type="file" />
                          <div className="image-uploads">
                            <h4>Change Image</h4>
                          </div>
                        </div>
                        <p className="mt-2">JPEG, PNG up to 2 MB</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <label className="form-label">
                        First Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Carl"
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label className="form-label">
                        Last Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Evans"
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Email<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="carlevans@example.com"
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">
                        Phone<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        defaultValue={+12163547758}
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Contact Type <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          className="w-100"
                          options={contactType}
                          value={selectedContactType}
                          onChange={(e) => setSelectedContactType(e.value)}
                          placeholder="Choose"
                          filter={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                        <span className="status-label">Status</span>
                        <input
                          type="checkbox"
                          id="user1"
                          className="check"
                          //defaultChecked=""
                        />
                        <label htmlFor="user1" className="checktoggle">
                          {" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Customer */}
        {/* delete modal */}
        <DeleteModal />
      </>
    </div>
  );
};

export default Contacts;
