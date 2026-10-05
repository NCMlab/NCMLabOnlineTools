SELECT 
	Screen.studyResult_id ,
	StudyResult.worker_id ,
	Screen.endDate ,
	json_extract(json_extract(json_extract(WordRecall.data, '$[last]'),'$.AllResults'),'$."Total Words Recalled"') as RAVLT_total,
	json_extract(json_extract(json_extract(WordRecall.data, '$[last]'),'$.AllResults'),'$."Words Recalled After B"') as RAVLT_delayed,
	json_extract(json_extract(json_extract(VSTM.data, '$[last]'),'$.AllResults'),'$."Threshold"') as VSTM_Capacity,
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
	json_extract(json_extract(VSTM.data, '$[last]'),'$.jatosTaskName')='Spatial DMS';
	


	
select 
    B.title, SR.worker_id, SR.startDate, SR.endDate
FROM
    Batch as B 
    left join StudyResult as SR on B.id = SR.batch_id
    left join ComponentResult as VSTM ON SR.id = VSTM.studyResult_id
where B.title = "NCM_2026" ;  AND
    json_extract(json_extract(VSTM.data, '$[last]'),'$.jatosTaskName')='Spatial DMS';

