import dbConnect from "../../../utils/dbConnect";
import Food from "../../../models/Food";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const food = await Food.findById(id);
        if (!food) return res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: food });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const food = await Food.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!food) return res.status(400).json({ success: false });

        res.status(201).json({ success: true, data: food });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const foodToDelete = await Food.deleteOne({ _id: id });
        if (!foodToDelete) return res.status(400).json({ success: false });

        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      break;
  }
};
