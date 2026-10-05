SELECT 
	Screen.studyResult_id ,
	StudyResult.worker_id ,
	Screen.endDate ,
	json_extract(json_extract(json_extract(WordRecall.data, '$[last]'),'$.AllResults'),'$."Total Words Recalled"') as RAVLT_total,
	json_extract(json_extract(json_extract(WordRecall.data, '$[last]'),'$.AllResults'),'$."Words Recalled After B"') as RAVLT_delayed,
	json_extract(json_extract(json_extract(VSTM.data, '$[last]'),'$.AllResults'),'$."Threshold"') as VSTM_Capacity,
	json_extract(json_extract(json_extract(Screen.data,'$[last]'),'$.AllResults'),'$.Age') as Age,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Screen.data,'$[last]'),'$.AllResults'),'$.Language')) as Lang,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Screen.data,'$[last]'),'$.AllResults'),'$.Vision')) as Vision,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Screen.data,'$[last]'),'$.AllResults'),'$.Hearing')) as Hearing,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Screen.data,'$[last]'),'$.AllResults'),'$.Neurological')) as Neurological,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Screen.data,'$[last]'),'$.AllResults'),'$."Computer Information"')) as CompInfo,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Screen.data,'$[last]'),'$.AllResults'),'$."Current Language"')) as CompLang,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Screen.data,'$[last]'),'$.AllResults'),'$."Available Language"')) as AvailLang,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Intake.data,'$[last]'),'$.AllResults'),'$."Year-Month of Birth"')) as BirthDate,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Intake.data,'$[last]'),'$.AllResults'),'$.Sex')) as Sex,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Intake.data,'$[last]'),'$.AllResults'),'$.Gender')) as Gender,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Intake.data,'$[last]'),'$.AllResults'),'$.YearsEdu')) as "Years Edu",
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Intake.data,'$[last]'),'$.AllResults'),'$.Handedness')) as Hand,
	json_extract(json_extract(json_extract(WCST.data, '$[last]'),'$.AllResults'),'$."Total Correct"') as WCST_NCor,
	json_extract(json_extract(json_extract(WCST.data, '$[last]'),'$.AllResults'),'$."Total Errors"') as WCST_NErr,
	json_extract(json_extract(json_extract(WCST.data, '$[last]'),'$.AllResults'),'$."Trials Administered"') as WCST_NTr,
	json_extract(json_extract(json_extract(WCST.data, '$[last]'),'$.AllResults'),'$."Number Perseverative Errors"') as WCST_NPerErr,
	json_extract(json_extract(json_extract(WCST.data, '$[last]'),'$.AllResults'),'$."Nonperseverative Errors"') as WCST_NNonPerErr,
	json_extract(json_extract(json_extract(WCST.data, '$[last]'),'$.AllResults'),'$."Nonperseverative Errors"') as WCST_NNonPerErr
FROM
	ComponentResult as Screen LEFT JOIN
	ComponentResult as Intake ON Screen.studyResult_id = Intake.studyResult_id LEFT JOIN 
	ComponentResult as WCST ON Screen.studyResult_id = WCST.studyResult_id LEFT JOIN
	ComponentResult as WordRecall ON Screen.studyResult_id = WordRecall.studyResult_id LEFT JOIN
	ComponentResult as VSTM ON Screen.studyResult_id = VSTM.studyResult_id
LEFT JOIN StudyResult 
	ON StudyResult.id = Intake.studyResult_id 
WHERE 
	json_extract(json_extract(Intake.data, '$[last]'),'$.jatosTaskName')='Intake Form' AND 
	json_extract(json_extract(Screen.data, '$[last]'),'$.jatosTaskName')='Screening' AND
	json_extract(json_extract(WCST.data, '$[last]'),'$.jatosTaskName')='Card Sort' AND
	json_extract(json_extract(WordRecall.data, '$[last]'),'$.jatosTaskName')='Word Recall' AND
	json_extract(json_extract(VSTM.data, '$[last]'),'$.jatosTaskName')='Spatial DMS' AND
	Screen.dataSize > 0 AND
	Intake.dataSize > 0;
	


	


select 
    B.title, SR.worker_id, SR.startDate, SR.endDate, count(CR.id)
from 
Batch as B 
    left join StudyResult as SR on B.id = SR.batch_id
    left join ComponentResult as CR on SR.id = CR.studyResult_id
where B.title = "NCM_2026"  
group by B.title, SR.id, SR.endDate;



select SR.id, SR.worker_id, CR.id, C.title
from 
	StudyResult as SR
left join ComponentResult as CR on SR.id = CR.studyResult_id
left join Component as C on CR.component_id = C.id
left join Batch as B on SR.batch_id = B.id
where B.title = "NCM_2026" and SR.worker_id = '2288';
	


select SR.id, SR.worker_id, CR.id, C.title,
json_extract(json_extract(json_extract(CR.data, '$[last]'),'$.AllResults'),'$."Threshold"') as VSTM_Capacity,
json_extract(json_extract(json_extract(CR.data, '$[last]'),'$.AllResults'),'$."Number of Reversal"') as VSTM_NumReversal
from 
	StudyResult as SR
left join ComponentResult as CR on SR.id = CR.studyResult_id
left join Component as C on CR.component_id = C.id
left join Batch as B on SR.batch_id = B.id
where SR.worker_id in (2234,2236,2240,2243,2246,2247,2250,2251,2268,2278,2281,2286,2288,2299,2302,2304,2308,2310,2314,2315,2334,2335,2340,2341,2344,2349,2351,2353,2354,2355,2357,2370,2371,2375,2396,2398,2399,2405,2409,2413,2414,2415,2419,2431,2438,2463,2478,2479,2481,2495) and 
	json_extract(json_extract(CR.data, '$[last]'),'$.jatosTaskName')='Spatial DMS';