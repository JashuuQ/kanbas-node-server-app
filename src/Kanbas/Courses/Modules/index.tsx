import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import React, { useState, useEffect } from "react";

import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    fetchModules();
  }, []);
  
  // const handleAddModule = () => {
  //   dispatch(addModule({ name: moduleName, course: cid }));
  //   setModuleName("");
  // };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };


  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />
      <br /><br /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  <span>{module.name}</span>
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    defaultValue={module.name}
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={() => dispatch(editModule(module._id))}
                />
              </div>

              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}

            </li>
          ))}
      </ul>
    </div>
  );
}
