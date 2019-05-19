workType(docsub, doc) {
    
    let workEnum = {
        moveOut: 1,
        moveIn: 2,
        moveAuto: 3,
        cerMove: 4,
        updMove:5,
      };
      
    let str = '';
    if ((Number(docsub) === 1) && (Number(doc) === 650 || Number(doc) === 750)) {
      str = 'ย้ายออกนอกเขต'
    } else if ((Number(docsub) === 2) && (Number(doc) === 650 || Number(doc) === 750)) {
      str = 'ย้ายออก-เข้าในเขต'
    } else if ((Number(docsub) === 3) && (Number(doc) === 650 || Number(doc) === 750)) {
      str = 'ย้ายไปต่างประเทศ'
    } else if ((Number(docsub) === 4) && (Number(doc) === 610 || Number(doc) === 710)) {
      str = 'ย้ายเข้า'
    } else if ((Number(docsub) === 5) && (Number(doc) === 610 || Number(doc) === 710)) {
      str = 'ย้ายปลายทางอัตโนมัติ'
    } else if ((Number(docsub) === 6) && (Number(doc) === 610 || Number(doc) === 710)) {
      str = 'ย้ายกลับจากต่างประเทศ'
    } else if (Number(docsub) === 0) {
      str = '-'
    }
    return str;
  },
export default { workType }