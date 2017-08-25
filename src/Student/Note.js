import React from "react";

const Note = ({timestamp, content, deleteNote}) =>
  <tr>
    <td>
      {new Date(parseInt(timestamp)).toString()}
    </td>
    <td>
      {content}
    </td>
  </tr>;

export default Note;
