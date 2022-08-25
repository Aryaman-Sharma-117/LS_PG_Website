import React from 'react'
import ReviewCard from './ReviewCard'

export default function Table() {
  return (
    <div className="reviews">
              <table width="100%">
                <tr className="header">
                <th colspan="5"><b>Reviews</b></th>
                </tr>
                <tr>
                  <td width="25%" height="100%"><ReviewCard/></td>
                  <td width="25%" height="100%"><ReviewCard/></td>
                  <td width="25%" height="100%">
                  <p className="abc">
                  <br/>
                    <hr/>
                      Subscribe to our newsletter to stay updated
                    <br/>
                  <hr/>
                  </p>
                  <form name="myform" id="myform" action="" method="post">
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Name</label>
                  </div>
                    <br/>
                    <hr/>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <br/>
                    <hr/>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="username"/>
                      <label for="floatingInput">Room No.</label>
                    </div>
                    <br/>
                    <hr/>
                    <input type="submit" name="submit" onclick="DoSubmit" />
                    <br/>
                    <hr/>
                  </form>
                  </td>
                  <td width="25%" height="100%">Rated 10/10 in hygiene and food qualities.<br/> Rated 9/10 in life conditions.<br/> Rated 9/10 in extra curicular facilities.<br/> Rated 10/10 in cultural environment.<br/>-Times Magzine(2021)</td>
                </tr>
              </table>
            </div>
  )
}
