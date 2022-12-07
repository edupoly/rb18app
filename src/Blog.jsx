import React from 'react'

function Blog() {
  var [posts,setPosts] = React.useState([]);
  var [newpost,setNewpost] = React.useState({thought:'',url:'',date:null,tags:null,author:'',likes:0,comments:[]})
  const [selectedPost, setSelectedPost] = React.useState(null)
  function handleThought(e){
    setNewpost({...newpost,thought:e.target.value})
  }
  function handleUrl(e){
    setNewpost({...newpost,url:e.target.value})
  }
  function addPost(){
    setPosts([...posts,{...newpost,date:Date.now(),author:'praveen'}])
  }
  console.log(posts);
  function getDate(d){
    var postDate = new Date(d);
    return postDate.toTimeString()
  }
  function deletePost(index){
    setSelectedPost(index)
    setTimeout(()=>{
      var temp = [...posts];
      temp.splice(index,1);
      setPosts([...temp]);
      setSelectedPost(null)
    },1000)
  }
  return (
    <div>
      <div className='border border-info border-2 m-2 p-2 d-flex align-items-center justify-content-around'>
        <div>
          <textarea style={{verticalAlign:'middle'}} rows="4" cols='50' placeholder='Enter your thought' onChange={handleThought}></textarea>
          <br></br>
          <input type="text" size="50" placeholder='Enter your image url' onChange={handleUrl}></input>
        </div>
        <div>
          <button className='btn btn-success btn-lg m-2' onClick={addPost}>Add Post</button>
        </div>
      </div>
      <hr />
      <div>
        <ul>
          {
            posts.map((post,i)=>{
              return <li className={selectedPost===i?'d-flex animate__animated animate__hinge':'d-flex animate__animated animate__fadeInUp'}>
                  <img src={post.url} alt="" className='w-25 border border-2 p-2 m-2'/>
                  <div>
                    <h1>{post.author}</h1>
                    <h5>{getDate(post.date)}</h5>
                    <p>{post.thought}</p>
                    <button onClick={()=>{deletePost(i)}}>Delete</button>
                  </div>
                </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Blog