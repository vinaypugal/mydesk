import toast from "react-hot-toast";
const  notify = (message, type) => {
if (type == undefined || null) {
  toast(message, {
    style: {
      border: "1px solid #4FB2BF",
      padding: "16px",
      backgroundColor: "#4FB2BF",
      color: "#fff",
    },
    duration: 3000,
    position: "bottom-center",
  });
}
else {
  toast[type](message, {
    style: {
      border: "1px solid #4FB2BF",
      padding: "16px",
      backgroundColor: "#4FB2BF",
      color: "#fff",
    },
    duration: 3000,
    position: "bottom-center",
  });
}
}
export default notify