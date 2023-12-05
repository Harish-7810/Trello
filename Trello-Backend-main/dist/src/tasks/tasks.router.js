"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const task_controller_1 = require("./task.controller");
const task_validator_1 = require("./task.validator");
exports.taskRouter = (0, express_1.Router)();
// Create a default route.
exports.taskRouter.get('/tasks', task_controller_1.taskController.getAll);
exports.taskRouter.post('/tasks', task_validator_1.createValidator, task_controller_1.taskController.create);
exports.taskRouter.put('/tasks', task_validator_1.updateValidtor, task_controller_1.taskController.update);
