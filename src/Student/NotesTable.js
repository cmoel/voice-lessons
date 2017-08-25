import React from "react";

const NotesTable = ({children}) =>
  <table className="table-striped" style={{paddingTop: 10, paddingBottom: 10}}>
    {children}
  </table>;

export default NotesTable;
