select 
    B.title, SR.worker_id, SR.startDate, SR.endDate, json_extract(json_extract(json_extract(CR.data,'$[last]'),'$.AllResults'),  '$."Response Time (ms)"') as RT,
    json_extract(json_extract(json_extract(CR.data,'$[last]'),'$.AllResults'),  '$."ScreenHeight"') as ScreenHeight,
    json_extract(json_extract(json_extract(CR.data,'$[last]'),'$.AllResults'),  '$."ScreenWidth"') as ScreenWidth
from 
    Batch as B 
    inner join StudyResult as SR on B.id = SR.batch_id
    inner join ComponentResult as CR on SR.id = CR.studyResult_id
    inner join Component as C on CR.component_id = C.id
where B.title = "NCM_2026"  AND
    C.title = "Trail Making"
    AND SR.worker_id in (2788, 2564);





select 
    B.title, SR.worker_id, SR.startDate, SR.endDate, json_extract(json_extract(json_extract(CR.data,'$[last]'),'$.AllResults'), '$."Response Time (ms)"')
from 
    Batch as B 
    inner join StudyResult as SR on B.id = SR.batch_id
    inner join ComponentResult as CR on SR.id = CR.studyResult_id
    inner join Component as C on CR.component_id = C.id
where B.title = "NCM_10-23-9755"  AND
    C.title = "Trail Making";






group by B.title, SR.id, SR.endDate;

SELECT 
	Intake.studyResult_id,
	StudyResult.worker_id,
	BDS.endDate,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Intake.data,'$[last]'),'$.AllResults'),'$.Sex')) as Sex,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Intake.data,'$[last]'),'$.AllResults'),'$.SleepLastNight')) as SleepLastNight,
	TRIM(BOTH '"' from json_extract(json_extract(json_extract(Intake.data,'$[last]'),'$.AllResults'),'$.SleepLastWeek')) as SleepLastWeek,
	json_extract(json_extract(json_extract(BDS.data, '$[last]'),'$.AllResults'),'$."Threshold"') as BDSThreshold,
	json_extract(json_extract(json_extract(BDS.data, '$[last]'),'$.AllResults'),'$."NTrials"') as BDSNTrials
FROM
	ComponentResult as Intake LEFT JOIN
	ComponentResult as BDS ON Intake.studyResult_id = BDS.studyResult_id
LEFT JOIN StudyResult 
	ON StudyResult.id = Intake.studyResult_id 
WHERE 
	json_extract(json_extract(Intake.data, '$[last]'),'$.jatosTaskName')='Intake Form' AND 
	json_extract(json_extract(BDS.data, '$[last]'),'$.jatosTaskName')='Digit Span' AND
	Intake.dataSize > 0;
