// src/services/userService.js
const User = require('../models/User');

// Função para criar um novo usuário
const createUser = async (data) => {
  try {
    const newUser = await User.create(data);
    return newUser;
  } catch (error) {
    throw new Error('Erro ao criar usuário');
  }
};

// Função para listar todos os usuários
const listUsers = async () => {
  return await User.find();
};

// Função para buscar um usuário específico pelo nome
const findUserByName = async (name) => {
  return await User.findOne({ nome: name });
};

// Função para atualizar o peso atual de um usuário
const updateCurrentWeight = async (name, newWeight) => {
  return await User.findOneAndUpdate(
    { nome: name },
    { currentWeight: newWeight },
    { new: true }
  );
};

// Função para remover um usuário pelo nome
const deleteUser = async (name) => {
  return await User.deleteOne({ nome: name });
};

module.exports = {
  createUser,
  listUsers,
  findUserByName,
  updateCurrentWeight,
  deleteUser
};
