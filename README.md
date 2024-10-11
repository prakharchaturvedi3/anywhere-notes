/auth
	/login
		valid user will provide {email, password}; validate details
		fetch the user object with given email and attach it to user_;
		match the password;
		generate JWT_TOKEN with claims {userId} and options {expiry: 1d}
		redirect with JWT_TOKEN as response
	/register
		user will provide {email, password, name}; validate details
		check if email already not presents
		create new user with data {name, email, password}; attach the userId to req.user_
		generate JWT_TOKEN with claims {userId} and options {expiry: 1d}
		send response
/page
	/ GET
		get JWT_TOKEN; validate the claim; get the userId; attach it to the req.user_;
		get all pages with {userId: req.user_, active: true}; attach it to req.page_;
		send response;
	/ POST
		get JWT_TOKEN; validate the claim; get the userId; attach it to the req.user_;
		validate the feilds{title, tags};
		create a new page with {title, tags, content: "", active: true, userId: req.user_}; attach the id to req.page_
		send response;
	/:id GET
		get JWT_TOKEN; validate the claim; get the userId; attach it to the req.user_;
		fetch page{content} where page{id: id, active, true, userId: req.user_}; attach the content to req.page_
		send response;
	/:id PUT
		get JWT_TOKEN; validate the claim; get the userId; attach it to the req.user_;
		validate the req body{title, content, tags}
		update page{title, content, active, tags} where page{id: id, active: true, userId: req.user_}
		send response;
	/:id DELETE
		get JWT_TOKEN; validate the claim; get the userId; attach it to the req.user_;
		validate the req body{title, content, tags, active}
		update page{title, conten, active: false, tags} where page{id: id, active: true, userId: req.user_}
		send response;
		
	
		