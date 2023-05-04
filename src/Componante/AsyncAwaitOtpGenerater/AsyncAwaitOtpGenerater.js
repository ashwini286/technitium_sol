
function Mobile() {


    async function Clickbtn() {
        const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP'
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ Mobile: 8603325327 }),

        }
        try {
            let response = await fetch(url, option)
            const data = await response.json()
            console.log("successfully send otp", data)
        } catch (error) {
            console.log("sorry we can't send you", error)
        }

    }

    Clickbtn()



    return (
        <div>
            <button onClick={Clickbtn}
                style={{
                    padding: '20px',
                    margin: '20px',
                    backgroundColor: "blueviolet",
                    borderRadius:"6px",
                    border: "none",
                    color: "white",
                    textTransform: "uppercase"


                }}
            >GenerateOtp</button>
        </div>
    )
}

export default Mobile