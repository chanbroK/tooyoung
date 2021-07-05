import { db } from "./firebase";
import xlsx from "xlsx";

export const saveToExcel = () => {
  const book = xlsx.utils.book_new();
  loadFromFireStore().then(docs => {
    let emailData = [];
    docs.forEach(doc => {
      emailData.push(doc.data());
    });
    const sheet = xlsx.utils.json_to_sheet(emailData);
    xlsx.utils.book_append_sheet(book, sheet, "고객");
    xlsx.writeFile(book, "customer.xlsx");
  });
};
export const saveToFireStore = (email: string, name: string, reason: string, phone: string) => {
  db.collection("Email").add({
    이메일: email,
    이름: name,
    사유: reason,
    연락처: phone,
  });
};
export const sendSlack = (email: string, name: string, reason: string, phone: string) => {
  //https://twojobui.tistory.com/46
  return;
};
export const registEmail = (email: string, name: string, reason: string, phone: string) => {
  saveToFireStore(email, name, reason, phone);
  sendSlack(email, name, reason, phone);
};
export const loadFromFireStore = async () => {
  return await db.collection("Email").get();
};
