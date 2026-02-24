let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

// interviewList.push({name: 'rubel', class: 'diploma'})
// rejectedList.push({name: 'rubel', class: 'diploma'})

const totalShow = document.getElementById('total-show');
const interviewShow = document.getElementById('interview-show');
const rejectedShow = document.getElementById('rejected-show');


const mainCon = document.querySelector('main');
const allFilterBtn = document.getElementById('all-fillter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const availabeAllCon = document.getElementById('available-job-con')
const availabeAllCount = document.getElementById('available-job-count')

const allJobsContainer = document.getElementById('all-jobs-con');
const allJobsCon = document.getElementById('all-jobs');
const allNoJob = document.getElementById('all-no-job');
const interviewCon = document.getElementById('interview-con');
const interview = document.getElementById('interview');
const interviewNoJob = document.getElementById('interview-no-job');
const rejectedCon = document.getElementById('rejected-con');
const rejected = document.getElementById('rejected');
const rejectedNoJob = document.getElementById('rejected-no-job');


function showJobs(){
    allNoJob.classList.add('hidden');
    interviewNoJob.classList.remove('hidden');
    rejectedNoJob.classList.remove('hidden');


    const allJob = allJobsCon.children.length;
    totalShow.innerText = allJob;
    availabeAllCount.innerText = allJob;
    if(allJob == 0){
        allNoJob.classList.remove('hidden');
    }
    
    const interviewJob = interviewList.length;
    interviewShow.innerText = interviewJob;
    if(interviewShow.innerText != 0){
        interviewNoJob.classList.add('hidden');
    }

    const rejectedJob = rejectedList.length;
    rejectedShow.innerText = rejectedJob;
    if(rejectedShow.innerText != 0){
        rejectedNoJob.classList.add('hidden');
    }

    // if(id == 'all-fillter-btn'){
    //     availabeAllCount.innerText = rejected.children.length;
    // }else if(id == 'interview-filter-btn'){
    //     availabeAllCount.innerText = allJob;
        
    // }
}
showJobs();

function toggleStyle(id){
    allFilterBtn.classList.remove('btn-info', 'text-base-100', 'btn-active');
    interviewFilterBtn.classList.remove('btn-info', 'text-base-100', 'btn-active');
    rejectedFilterBtn.classList.remove('btn-info', 'text-base-100', 'btn-active');

    currentStatus = id;
    console.log(currentStatus);

    const selected = document.getElementById(id);
    selected.classList.add('btn-info', 'text-base-100', 'btn-active')

    if(id == 'all-fillter-btn'){
        allJobsContainer.classList.remove('hidden');
        interviewCon.classList.add('hidden');
        rejectedCon.classList.add('hidden');
        availabeAllCount.innerText = allJobsCon.children.length;
    }else if(id == 'interview-filter-btn'){
        allJobsContainer.classList.add('hidden');
        interviewCon.classList.remove('hidden');
        rejectedCon.classList.add('hidden');
        randerInterview();
        availabeAllCount.innerText = interview.children.length;
    }
    else{
        allJobsContainer.classList.add('hidden');
        interviewCon.classList.add('hidden');
        rejectedCon.classList.remove('hidden');
        randerRejected();
        availabeAllCount.innerText = rejected.children.length;
        
    }
};

function showJobOfFull(){
    if(currentStatus == 'all-fillter-btn'){
        console.log('hello');
        availabeAllCount.innerText = allJobsCon.children.length;
    }else if(currentStatus == 'interview-filter-btn'){
        
        availabeAllCount.innerText = interview.children.length;
    }
    else if(currentStatus == 'rejected-filter-btn'){
        availabeAllCount.innerText = rejected.children.length;
        
    }
    console.log('hi');
}

mainCon.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    
    if(event.target.classList.contains('success-btn')){
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobPosition = parentNode.querySelector('.job-position').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        let jobStatus = parentNode.querySelector('.job-status');
        const workDatails = parentNode.querySelector('.work-datails').innerText;
        
        jobStatus.classList.add('bg-green-200');
        jobStatus.classList.remove('bg-red-200')
        jobStatus.innerText = 'Success';

        const cardInfo = {
            jobName, 
            jobPosition, 
            jobType, 
            jobStatus:'Success', 
            workDatails
        }
        
        // click button style
        const btnParent = event.target.parentNode;
        const btn1 = btnParent.querySelector('.success-btn');
        const btn2 = btnParent.querySelector('.rejected-btn');
        btn1.classList.add('btn-active');
        btn2.classList.remove('btn-active');


        const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName);
        
        if(!jobExist){
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName);

        if(currentStatus == 'rejected-filter-btn'){
            randerRejected();
        }
        showJobs();
        showJobOfFull();
    }
    else if(event.target.classList.contains('rejected-btn')){
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobPosition = parentNode.querySelector('.job-position').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        let jobStatus = parentNode.querySelector('.job-status');
        const workDatails = parentNode.querySelector('.work-datails').innerText;
        
        jobStatus.classList.add('bg-red-200')
        jobStatus.innerText = 'Rejected';

        const cardInfo = {
            id: Date.now(),
            jobName, 
            jobPosition,
            jobType, 
            jobStatus:'Rejected', 
            workDatails}


        const btnParent = event.target.parentNode;
        const btn1 = btnParent.querySelector('.success-btn');
        const btn2 = btnParent.querySelector('.rejected-btn');
        btn1.classList.remove('btn-active');
        btn2.classList.add('btn-active');

        const jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName);
        if(!jobExist){
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName);

        if(currentStatus == 'interview-filter-btn'){
            randerInterview();
        }
        showJobs();
        showJobOfFull();
    }else if(event.target.classList.contains('dalate-btn-icon')){
        const parentNode = event.target.parentNode.parentNode.parentNode;
        parentNode.remove();
        showJobs();
        showJobOfFull();
    }else if(event.target.closest('.dalate-btn')){
        parentNode.remove();
        showJobs();
        showJobOfFull();
    }
    else if(event.target.closest('.btn-rej-int')){
        const deleteBtn = event.target.closest('.btn-rej-int');
        const jobCard = deleteBtn.closest('.job');
        const jobName = jobCard.getElementsByClassName('job-name')
        if(currentStatus == 'interview-filter-btn'){
            interviewList = interviewList.filter(item => item.jobName != jobName[0].innerText);
            randerInterview();
            // randerInterview();
        }else if(currentStatus == 'rejected-filter-btn'){
            randerInterview();
            rejectedList = rejectedList.filter(item => item.jobName != jobName[0].innerText);
            randerRejected();
        }
        showJobs();
        showJobOfFull();
    }
});

function randerInterview(){
    interview.innerHTML = '';
    for(let success of interviewList){
        let div = document.createElement('div');
        div.classList = 'job p-6 bg-base-100 shadow-sm rounded-lg flex justify-between';
        div.innerHTML = `
        <div class="space-y-5">
            <div>
                <h1 class="job-name font-semibold text-[18px]">${success.jobName}</h1>
                <p class="job-position text-neutral-500">${success.jobPosition}</p>
            </div>
            <p class="job-type text-neutral-500 text-[14px]">${success.jobType}</p>
            
            <div>
                <div class="job-status font-medium bg-primary-content inline-block py-2 px-3 mb-2 rounded-[4px] bg-green-200">${success.jobStatus}</div>
                <p class="work-datails line-clamp-2">${success.workDatails}</p>
            </div>
            <div>
                <button class="success-btn btn btn-outline btn-success btn-active">Success</button>
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
        </div>
        <!-- main part 2 -->
        <div>
            <button class="btn-rej-int btn text-[20px]"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `;
        interview.appendChild(div);
    }
}


function randerRejected(){
    rejected.innerHTML = '';
    for(let reject of rejectedList){
        let div = document.createElement('div');
        div.classList = 'job p-6 bg-base-100 shadow-sm rounded-lg flex justify-between';
        div.innerHTML = `
        <div class="space-y-5">
            <div>
                <h1 class="job-name font-semibold text-[18px]">${reject.jobName}</h1>
                <p class="job-position text-neutral-500">${reject.jobPosition}</p>
            </div>
            <p class="job-type text-neutral-500 text-[14px]">${reject.jobType}</p>
            
            <div>
                <div class="job-status font-medium bg-primary-content inline-block py-2 px-3 mb-2 rounded-[4px] bg-red-200">${reject.jobStatus}</div>
                <p class="work-datails line-clamp-2">${reject.workDatails}</p>
            </div>
            <div>
                <button class="success-btn btn btn-outline btn-success">Success</button>
                <button class="rejected-btn btn btn-outline btn-error btn-active">Rejected</button>
            </div>
        </div>
        <!-- main part 2 -->
        <div>
            <button class="btn-rej-int btn text-[20px]"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `;
        rejected.appendChild(div);
    }
}