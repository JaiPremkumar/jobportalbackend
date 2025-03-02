class apiFeature{
    constructor(query,queryStr){
        this.query = query,
        this.queryStr= queryStr
    }
    search(){
        let keyword = this.queryStr.keyword?{
            name:{
                $regex:this.queryStr.keyword,
                $option:'i'
            },
        }:{}

        this.query.find({...keyword})
        return this
    }

    filter(){
        const queryCopy = {...this.queryStr}
        const RemoveField = ['keyword','limits','keys']
        RemoveField.find(i=>delete queryCopy[i])
        this.query.find(queryCopy)
        console.log(queryCopy)
    }

    salarySearch(){
        let keyword1 = this.queryStr.keyword1?{
            salary:{
                $name:this.queryStr.keyword1,
                $option:'i'
            }
        }:{}
        this.query.find({...keyword1})
        return this
    }
    filter(){
        const queryCopy = {...this.queryStr}
        const Remove = ['keyword','limits','keys']
        Remove.forEach(i=>delete queryCopy[i])
        this.query.find(queryCopy)
        return this
    }

    idSearch(){
        let keyword2 = this.queryStr.keyword2?{
            _id:{
                $name:this.queryStr,
                $option:'i'
            }
        }:{}

        this.query.find({...keyword2})
        return this
    }
    filter(){
        const queryCopy = {...this.queryStr}
        const remove = ['keyword','limits','keys']
        remove.forEach(i=>delete queryCopy[i])

        this.query.find(queryCopy)
        return this
    }
}

module.exports = apiFeature