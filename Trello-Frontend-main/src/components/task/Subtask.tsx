import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import './Subtask.css';
import { ITaskDescription } from './interfaces/ITaskDescription';
import PropTypes from 'prop-types';

//import { Schedule, Week, Month, TimelineViews, TimelineMonth } from '@syncfusion/ej2-schedule';
//import { scheduleData } from './datasource.ts';
import {
  CheckSquare,
  Tag,
  XCircle,
  Type,
} from 'react-feather';
import CustomInput from './helpers/CustomInput';

export const SubTask: FC<ITaskDescription> = (
  props,
): ReactElement => {
  const [hideLightbox, setHideLightbox] = useState(true);
  //  Destructure Props
  const { description = 'Lorem ipsum dolor sit amet' } =
    props;

  return (
    <Box>
      <br />
      <Typography color="Black">
        <button onClick={() => setHideLightbox(false)}>
          {description}
        </button>
        <div
          className={`lightbox ${
            hideLightbox ? 'hide-lightbox' : ''
          }`}
        >
          <div className="CloseBtn">
            <XCircle
              onClick={() => setHideLightbox(true)}
            />
          </div>
          <center>
            <h1>Welcome to subtask area</h1>
          </center>
          <div className="cardinfo-box">
            <div className="cardinfo-box-title">
              <Type />
              <p>Title</p>
            </div>
            <CustomInput
              // defaultValue={cardValues.title}
              // text={cardValues.title}
              placeholder="Enter Title"
              text={'Enter Title'}
              onSubmit={function (value: string): void {
                throw new Error(
                  'Function not implemented.',
                );
              }} // onSubmit={updateTitle}
            />
          </div>

          <Tag />
          <div>Label</div>
          <CustomInput
            // defaultValue={cardValues.title}
            // text={cardValues.title}
            placeholder="Enter Title"
            text={'Add Label'}
            onSubmit={function (value: string): void {
              throw new Error('Function not implemented.');
            }} // onSubmit={updateTitle}
          />

          <div className="Attach">
            {' '}
            Add Some Attachments
            <input type="file" accept="image/*" multiple />
          </div>
          <div className="cardinfo-box-title">
            <CheckSquare />
            <div>Tasks</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptates numquam
              reiciendis eaque.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptates numquam
              reiciendis eaque.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptates numquam
              reiciendis eaque.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptates numquam
              reiciendis eaklque.
            </div>

            <div className="cardinfo-box-task-checkbox">
              <input type="checkbox" />
            </div>
            <CustomInput
              text={'Add a Task'}
              placeholder="Enter task"
              onSubmit={function (value: string): void {
                throw new Error(
                  'Function not implemented.',
                );
              }} // onSubmit={addTask}
            />
            <div className="cardinfo-box-task-list"></div>
          </div>
        </div>
      </Typography>
    </Box>
  );
};

SubTask.propTypes = {
  description: PropTypes.string,
};
