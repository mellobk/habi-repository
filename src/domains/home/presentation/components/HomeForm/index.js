import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./HomeForm.scss";
import InputApp from "../../../../../shared/presentation/components/Input";
import ButtonApp from "../../../../../shared/presentation/components/Button";
import { setUserInfo } from "../../../application/slices/home";
import { history } from "../../../../../shared/application/helpers/history";
import { getActualRotue, getUserInfo } from "../../../application/selectors/home";
import ButtonsForm from "../ButtonsForm";

const HomeForm = ({ schema, inputArray }) => {

    const [linkPush, setLinkPush] =  useState('')
    const routesPath = useSelector(getActualRotue); 
    const userInfo = useSelector(getUserInfo); 
    
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const dispatch = useDispatch();
  
  const handleOnchange = (name,data) => {
    dispatch(setUserInfo({ [name]:data }))
}

  const onSubmit = () => {
       history.push(linkPush)};

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {inputArray &&
          inputArray.map((data, key) => {
            return (
              <InputApp
                key={key}
                className={data.className}
                title={data.title}
                type={data.type}
                name={data.name}
                value={data.value}
                onChange={(e)=>handleOnchange(data.name,e.target.value)}
                defaultValue={userInfo[data.name]}
                placeholder={data.placeholder}
                register={register(data.name)}
                error={errors[data.name]?.message}
              />
            );
          })}

      <ButtonsForm setLinkPush={setLinkPush} routesPath={routesPath} />
      </form>
    </div>
  );
};

HomeForm.propTypes = {
  schema: PropTypes.object,
  inputArray: PropTypes.array,
  children: PropTypes.node||  PropTypes.arrayOf(PropTypes.node),
};

ButtonApp.defaultProps = {
    schema:{},
    inputArray: []
  };

export default HomeForm;
