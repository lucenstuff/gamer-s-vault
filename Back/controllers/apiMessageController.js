class apiMessageController {
  static async getMessage(req, res) {
    res.status(200).json({ message: "Welcome to the gamer's vault API!" });
  }
}

export default apiMessageController;
