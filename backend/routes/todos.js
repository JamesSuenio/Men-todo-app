const router = require("express").Router();
const Todo = require("../models/Todo");
const auth = require("../middleware/auth");

// Get todos
router.get("/", auth, async (req, res) => {
  res.json(await Todo.find({ userId: req.userId }));
});

// Add todo
router.post("/", auth, async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    completed: false,
    userId: req.userId
  });
  res.json(todo);
});

// Toggle todo
router.put("/:id", auth, async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo || todo.userId !== req.userId) return res.status(404).json("Todo not found");
  todo.completed = !todo.completed;
  await todo.save();
  res.json(todo);
});

// Delete todo
router.delete("/:id", auth, async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo || todo.userId !== req.userId) return res.status(404).json("Todo not found");
  await Todo.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;
