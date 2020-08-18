import dbConnect from "../../../utils/dbConnect";
import Food from "../../../models/Food";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const foods = await Food.find({});
        res.status(200).json({ success: true, data: foods });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const food = await Food.create(req.body);
        res.status(201).json({ success: true, data: food });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      break;
  }
};
