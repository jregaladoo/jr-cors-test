function main() {
    console.log("main function");
    console.log("ajax request to the resource which will require cors enabled");
    $.ajax
    ({
        dataType: "json",
        url: "https://sandbox.elixir.app/rewards/0d3a01eb-73dd-4f7b-a81f-91aa0e7420c6/session",
        headers: { "x-api-key": "5dda3946-c3d0-4ee6-abef-ed27196f14f4", 
                    "x-api-signature": "150f5c949675e4c76905667f2cac1992b49441a29d60c9f38f632e10f43c0062", 
                    "x-api-time": "1620989502785",
		   "authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyOTU0MWMxZC0zMzRiLTQxMDctOGUwMy1mNGRhMzI3NDc1MDciLCJpYXQiOjE1ODcwNzI4NDUsImV4cCI6MTY0MDk5MTYwMH0.MYIgScoMETx5Qk6VSQQ01gSEKlvOaY-4xHJ-75lEqMIpoIin21ffkTpbnEDe2cUfHoYj2xqXPG8Bm9YcLLee6w" },
        success: function(data) 
        {
            console.log("log response on success");
            console.log(data);
        }
    });
}