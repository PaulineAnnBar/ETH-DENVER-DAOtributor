//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13 ;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

contract DAOContributor {
    using Counters for Counters.Counter;
    Counters.Counter private _taskIds;
    Counters.Counter private _contributorIds;

    enum TaskStatus {CREATED, ONGOING, CLOSED}

    struct Task {
        uint taskId;
        address creator;
        string taskName;
        string skillWanted;
        string message;
        uint price;
        address contributor;
        TaskStatus taskStatus;

    }

    struct ContributorProfile {
        uint cId;
        address contributor;
        string name;
        string skills;
        string links;
    }

    mapping(uint => Task) taskIdMapping;
    mapping(address => ContributorProfile) contributorIdMapping;
    mapping(address => uint[]) daoTasksList;
    mapping(address => uint) contributorToTaskMap;

    constructor() {
        _taskIds.increment();
        _contributorIds.increment();
    }

    function createTask(string memory _taskName, string memory _skillWanted, string memory _message) external payable returns (uint id) {
        uint _id = _taskIds.current();
        Task memory newTask = Task(_id, msg.sender, _taskName, _skillWanted, _message, msg.value, address(0), TaskStatus.CREATED);

        taskIdMapping[_id] = newTask;
        daoTasksList[msg.sender].push(_id);

        _taskIds.increment();
        return _id;

    }

    function createContributorProfile(string memory _name, string memory _skills, string memory _links) external returns (bool) {
        uint cId = _contributorIds.current();
        ContributorProfile memory newContributor = ContributorProfile(cId, msg.sender, _name, _skills, _links);

        contributorIdMapping[msg.sender] = newContributor;
        _contributorIds.increment();

        return true;

    }

    function applyForTask(uint taskId) public {
        require(contributorIdMapping[msg.sender].cId != 0, "Contributor is not yet registered");
        require(taskIdMapping[taskId].taskStatus == TaskStatus.CREATED, "Task has not been created yet");
        require(contributorToTaskMap[msg.sender] == 0, "User cannot do more than one task simultaneously");
        require(taskIdMapping[taskId].contributor == address(0), "This task is alrady ongoing");

        taskIdMapping[taskId].taskStatus = TaskStatus.ONGOING;
        taskIdMapping[taskId].contributor = msg.sender;

        contributorToTaskMap[msg.sender] = taskId;

    }

    function completeTask(uint taskId) public {
        require(contributorToTaskMap[msg.sender] == taskId, "Contributor has not applied for this task");
        require(taskIdMapping[taskId].taskStatus != TaskStatus.CLOSED, "This task has been completed.");

        taskIdMapping[taskId].taskStatus = TaskStatus.CLOSED;


        payable(taskIdMapping[taskId].contributor).transfer(taskIdMapping[taskId].price);

    }

   
    /* 
        GET FUNCTIONS TO RETRIEVE DATA FROM CHAIN
    */

    function getAllTasksForADao(address _daoAddress) public view returns(uint[] memory) {
        return daoTasksList[_daoAddress];
    }

    function getTaskDetailsForTaskId(uint taskId) public view returns(uint _id, address _creator, 
        string memory _taskName, string memory _skillWanted, string memory _message, uint _price, TaskStatus _taskStatus) {

        require(taskIdMapping[taskId].taskId != 0, "Task dosn't exist");

        return (taskIdMapping[taskId].taskId, taskIdMapping[taskId].creator, taskIdMapping[taskId].taskName, 
            taskIdMapping[taskId].skillWanted, taskIdMapping[taskId].message, taskIdMapping[taskId].price, taskIdMapping[taskId].taskStatus);
    }

    function getTaskForContributor() public view returns(uint) {
        return contributorToTaskMap[msg.sender];
    }


    function taskStatus(uint taskId) public view returns(TaskStatus) {
        return taskIdMapping[taskId].taskStatus;
    }


}
