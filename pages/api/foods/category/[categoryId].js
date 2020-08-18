import Food from "../../../../models/Food";
import dbConnect from "../../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { categoryId },
  } = req;

  switch (method) {
    case "GET":
      try {
        const foods = await Food.find({
          categoryId: categoryId,
        }).populate("categoryId");
        res.status(200).json({ success: true, data: foods });
      } catch (error) {
        res.status(400).json({ success: false, data: error });
      }
      break;

    default:
      break;
  }
};
