const Schema = mongoose.Schema;

//如果需要添加验证,则需要在schema中指定验证方法,可以自己完成验证方法,也可以调用mongoose-validator ,
//参阅 http://mongoosejs.com/docs/validation.html  或 https://github.com/leepowellcouk/mongoose-validator

let roleSchema = new Schema({
  roleName:{type:String, required:true},
  permissions:{type:Attay, required:true,default:{}}
},{
  timestamps: true
});

roleSchema.methods = {
  
};

mongoose.model('User',roleSchema,'User');