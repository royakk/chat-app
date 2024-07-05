import firebase from "@/firebase.config"
import { SubmitHandler, useForm } from "react-hook-form"

export const Signup = () => {
  interface Inputs {
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      if (user) {
        await user.updateProfile({
          displayName: data.firstName + ' ' + data.lastName,
        })
        await firebase.firestore().collection('users').doc(user.uid).set({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          createdAt: Date.now(),
        })
      }
    } catch (e) {
      console.error(e)
      alert(e)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row mx-0 my-3">
        <div className="col-6">
          <label className="form-label">First Name</label>
          <input
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="col-6">
          <label className="form-label">Last Name</label>
          <input
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}
        </div>
        <div className="col-12">
          <label className="form-label">Email</label>
          <input
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="col-12">
          <label className="form-label">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
      </div>
      <div className="d-flex p-2">
        <button type="submit" className="ms-auto btn btn-primary">
          Register
        </button>
      </div>
    </form>
  )
}
