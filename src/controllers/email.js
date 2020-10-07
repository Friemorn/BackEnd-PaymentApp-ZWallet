const helpersEmail  = require('../helpers/sendEmail')

module.exports = {
  sendEmail: async(req, res)=>{
    const {to, subject, order} = req.body
    const data =  {
      to,
      subject,
      order
    }
    helpersEmail.send(data)
      .then((result)=>{
        console.log(result)
      res.send(result)
      })
      .catch((err)=>{
      console.log(err)
    })
  }
}