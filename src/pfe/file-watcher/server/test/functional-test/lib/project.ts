/*******************************************************************************
 * Copyright (c) 2019 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
import * as projectsController from "../../../src/controllers/projectsController";
import * as dockerUtil from "../../../src/utils/dockerutil";
import * as kubeUtil from "../../../src/utils/kubeutil";
import * as project from "../../../src/projects/Project";
import * as operation from "../../../src/projects/operation";

import Filewatcher from "../../../src/index";

const filewatcher = new Filewatcher();

export interface ProjectCreation {
  projectID: string;
  projectType: string;
  location: string;
}

export async function createProject(projectInfo: ProjectCreation): Promise<any> {
  return await filewatcher.createProject(projectInfo);
}

export async function deleteProject(projectID: string): Promise<any> {
  return await filewatcher.deleteProject(projectID);
}

export async function getProjectCapabilities(projectID: string): Promise<projectsController.IGetProjectCapabilitiesSuccess | projectsController.IGetProjectCapabilitiesFailure> {
  return await filewatcher.getProjectCapabilities(projectID);
}

export async function projectAction(req: projectsController.IProjectActionParams): Promise<projectsController.IProjectActionSuccess | projectsController.IProjectActionFailure> {
  return await filewatcher.performProjectAction(req);
}

export async function projectSpecification(req: projectsController.IProjectSpecificationParams): Promise<projectsController.IProjectSpecificationFailure | projectsController.IProjectSpecificationSuccess> {
  return await filewatcher.reconfigProjectSpecification(req);
}

export async function getProjectLogs(projectID: string): Promise<projectsController.IGetLogsSuccess | projectsController.IGetLogsFailure> {
  return await filewatcher.getProjectLogs(projectID);
}

export async function getApplicationContainerInfo(projectInfo: project.ProjectInfo, containerName: string): Promise<dockerUtil.ContainerInfo> {
  return await dockerUtil.getApplicationContainerInfo(projectInfo, containerName);
}

export async function getApplicationContainerInfoInK8(projectInfo: project.ProjectInfo, operation: operation.Operation): Promise<kubeUtil.PodInfo> {
  return await kubeUtil.getApplicationContainerInfo(projectInfo, operation);
}
