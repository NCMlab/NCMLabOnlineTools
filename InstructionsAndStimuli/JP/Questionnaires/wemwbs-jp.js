var title = "WEMWBS"
var shortTitle = "WEMWBS"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
  elements: [
    {
        type: "html",
        name: "introduction",
        html: "以下の選択肢は、あなたの気持ちや考えについて尋ねるものです。最近2週間のあなたの体験をもっともよく表現しているものをチェックしてください。"
       },
    {
        type: 'radiogroup',
        title: '将来に関して楽観的に感じる',
        name: 'wemwbs001',
        colCount: 0,
        choices:
            [
              { value: 1, text: '全くない' }, 
              { value: 2, text: 'めったにない' },
              { value: 3, text: 'ときたまある' },
              { value: 4, text: 'しばしばある' }, 
              { value: 5, text: 'いつもある'}
            ],
    },
    {
        type: 'radiogroup',
        title: '自分が役に立つ人間だと感じる',
        name: 'wemwbs002',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'リラックスしている',
        name: 'wemwbs003',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },

      {
        type: 'radiogroup',
        title: '自分以外の人々に関心がある',
        name: 'wemwbs004',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '充分なエネルギーがある',
        name: 'wemwbs005',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '問題に対処できている',
        name: 'wemwbs006',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'クリアに考えることができている',
        name: 'wemwbs007',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '自分に満足している',
        name: 'wemwbs008',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '自分以外の人々に親しみを感じる',
        name: 'wemwbs009',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '自分に自信がある',
        name: 'wemwbs010',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },

      {
        type: 'radiogroup',
        title: '物事を自分で決めることができている',
        name: 'wemwbs011',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '大切にされていると感じる',
        name: 'wemwbs012',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '新しい物事に関心がある',
        name: 'wemwbs013',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },
      {
        type: 'radiogroup',
        title: '明るい気分だ',
        name: 'wemwbs014',
        colCount: 0,
        choices:
        [
            { value: 1, text: '全くない' }, 
            { value: 2, text: 'めったにない' },
            { value: 3, text: 'ときたまある' },
            { value: 4, text: 'しばしばある' }, 
            { value: 5, text: 'いつもある'}
        ],    
      },

    ],
  }]
}

var EN_wemwbsJSON = {}
EN_wemwbsJSON.title = title,
EN_wemwbsJSON.shortTitle = shortTitle,
EN_wemwbsJSON.survey_JSON = survey_JSON
EN_wemwbsJSON.description = ""
EN_wemwbsJSON.QuestionnaireType = 'radiogroup'
EN_wemwbsJSON.references = "references"
EN_wemwbsJSON.notes = ''
