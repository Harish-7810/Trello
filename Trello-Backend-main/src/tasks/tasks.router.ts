import { Router} from 'express';
import { taskController } from './task.controller';
import { createValidator,updateValidtor } from './task.validator';


export const taskRouter: Router = Router();

// Create a default route.
taskRouter.get(
  '/tasks', taskController.getAll
  );

taskRouter.post(
  '/tasks',
  createValidator, 
  taskController.create, 
);


taskRouter.put(
  '/tasks',
  updateValidtor,
  taskController.update,
);

