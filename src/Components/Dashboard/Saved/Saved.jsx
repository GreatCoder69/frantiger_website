import React from "react";

const Saved = () => {
  return (
    <div>
      <div className="ads-main-content">
        <div>
          <h2>All Saved Listings</h2>
        </div>

        <div className="campaigns-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samosa franchise tea room outlet</td>
                {/* <td>
                  <a href="#dashboard">Dashboard</a>
                </td> */}
                {/* <td>N/A</td>
                <td>N/A</td> */}
                <td className="status-active">X</td>
              </tr>
              <tr>
                <td>Fruit Culture Franch</td>

                <td className="status-active">X</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Saved;
