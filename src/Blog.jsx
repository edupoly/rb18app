import React from 'react'

function Blog() {
  var [posts,setPosts] = React.useState([
    {
        "thought": "Introduction to Industry Standards and Practices at College level helped thousands of students to get motivated and successful. We deliver the process of Incorporating conceptual depth elates students to get confidence and capability to be a fruitful career.",
        "url": "https://edupoly.com/assets/vlr%20bootcamp%20training.jpg",
        "date": 1670399300408,
        "tags": null,
        "author": "Drithiman",
        "likes": 0,
        "comments": []
    },
    {
        "thought": "Many Freshers are transformed to employable resources from our Bootcamp Training. Industry level problem statements, design patterns and bestpractices are inducted in freshes with minimalistic approach is our approach.",
        "url": "https://edupoly.com/assets/vlr%20institutional%20training.jpg",
        "date": 1670399349488,
        "tags": null,
        "author": "Praveen",
        "likes": 0,
        "comments": []
    },
    {
        "thought": "We Provide Industry Ready Corporate Training for freshers and upskilling professionals. Blend on complete foundation and realtime usecases is our promise to corporates and we provided with conviction.",
        "url": "https://edupoly.com/assets/vlr%20corporate%20training%201.jpg",
        "date": 1670399864491,
        "tags": null,
        "author": "Rohit",
        "likes": 0,
        "comments": []
    }
]);
  var [newpost,setNewpost] = React.useState({thought:'',url:'',date:null,tags:null,author:'',likes:0,comments:[]})
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [selectedLikePost, setSelectedLikePost] = React.useState(null)
  function handleThought(e){
    setNewpost({...newpost,thought:e.target.value})
  }
  function handleUrl(e){
    setNewpost({...newpost,url:e.target.value})
  }
  function handleAuthor(e){
    setNewpost({...newpost,author:e.target.value})
  }
  function addPost(){
    setPosts([...posts,{...newpost,date:Date.now()}])
  }
  console.log(posts);
  function getDate(d){
    var postDate = new Date(d);
    return postDate.toTimeString()
  }
  function like(index){
    setSelectedLikePost(index)
    setTimeout(()=>{
      setSelectedLikePost(null)
    },3000)
    var temp = [...posts];
    temp[index].likes++;
    setPosts([...temp]);
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
          <textarea style={{verticalAlign:'middle'}} rows="4" cols='100' placeholder='Enter your thought' onChange={handleThought}></textarea>
          <br></br>
          <input type="text" size="100" placeholder='Enter your image url' onChange={handleUrl}></input>
          <br></br>
          <input type="text" size="100" placeholder='Enter author Name' onChange={handleAuthor}></input>
        </div>
        <div>
          <button className='btn btn-success btn-lg m-2' onClick={addPost}>Add Post</button>
        </div>
      </div>
      <hr />
      <div>
        <ul className='position-relative'>
          {
            posts.map((post,i)=>{
              return <li className={selectedPost===i?'d-flex animate__animated animate__hinge':'d-flex animate__animated animate__fadeInUp'}>
                    <button onClick={()=>{deletePost(i)}} className="position-absolute top-0 end-0">Delete</button>
                  <img src={post.url} alt="" className='w-25 border border-2 p-2 m-2'/>
                  <div>
                    <h1>{post.author}</h1>
                    <h5>{getDate(post.date)}</h5>
                    <p>{post.thought}</p>
                    <div className='position-relative'>
                      <i class="bi bi-hand-thumbs-up display-6" onClick={()=>{like(i)}}>{post.likes}</i>
                      {
                        selectedLikePost === i && (<lottie-player class='position-absolute top-0' src="https://assets4.lottiefiles.com/packages/lf20_e6H1bPHepu.json"  
                        background="transparent"  speed="1"  style={{width:'100px',height:'100px',zIndex:-1}}  loop autoplay></lottie-player>)
                      }
                    </div>
                    
                    <br />
                    <br />
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