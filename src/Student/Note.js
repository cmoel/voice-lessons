import React from "react";
import {LocalDateTime, DateTimeFormatter} from "js-joda";

const formatTimestamp = tsString => {
  const ldt = LocalDateTime.parse(tsString);
  const hour = ldt.hour();
  const amOrPm = hour < 12 ? "am" : "pm";
  const formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy h:mm");
  return `${ldt.format(formatter)} ${amOrPm}`;
};

const Note = ({timestamp: tsString, content, deleteNote}) =>
  <tr>
    <td>
      {formatTimestamp(tsString)}
    </td>
    <td>
      {content}
    </td>
  </tr>;

export default Note;
