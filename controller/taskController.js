const Task = require('../model/task');

exports.createTask = async (req, res) => {
    try {
        const { name, status } = req.body;

        if (!status || !name || typeof name !== 'string' || name.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: "Task name is required and must be a non-empty string.",
            });
        }

        const task = await Task.create({ name: name.trim(), status });

        return res.status(201).json({
            success: true,
            message: "Task Created Successfully",
            data: task
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error While Creating Task",
            error: err.message
        });
    }
};


exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 }); 
        return res.status(201).json({
            success: true,
            message: "All Task Fetched Successfully",
            data: tasks
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Tasks",
            error: err.message
        });
    }
};

exports.getTaskById = async (req, res) => {
    // debugger;
    try {
        const id =req.query.id;
        // console.log(id);
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        return res.status(201).json({
            success: true,
            message: " Task Fetched Successfully",
            data: task
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Tasks with Particular ID",
            error: err.message
        });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const id = req.query.id
        console.log(id)
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        };
        return res.status(201).json({
            success: true,
            message: "Task deleted successfully",
            data: task
        });
    } 
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong in Deleting Task",
            error: err.message
        });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { id, name, status } = req.body;

        if (!id || !name || !status || typeof status !== 'string' || status.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: "ID, name, and valid status are required.",
            });
        }

        const task = await Task.findOneAndUpdate({ _id: id}, {name, status },{ new: true, runValidators: true });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found with the given ID and name.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating the task",
            error: err.message
        });
    }
};
