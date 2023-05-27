const { Car } = require("../models");
const CarController = require("./CarController");

describe("CarController", () => {
  //   describe("#handleListCar", () => {
  //     it("should call res.status(201) and res.json with list of Car instances", async () => {
  //       const name = "Hello";
  //       const price = 100000;
  //       const size = "Small";
  //       const image = "contoh.png";

  //       const mockRequest = {};

  //       const cars = [];

  //       for (let i = 0; i < 10; i++) {
  //         const car = new Car({ name, price, size, image });
  //         cars.push(car);
  //       }

  //       const mockCarModel = { findAll: jest.fn().mockReturnValue(cars) };

  //       const mockResponse = {
  //         status: jest.fn().mockReturnThis(),
  //         json: jest.fn().mockReturnThis(),
  //       };

  //       const carController = new CarController({ carModel: mockCarModel });

  //       await carController.handleListCars(mockRequest, mockResponse);

  //       expect(mockCarModel.findAll).toHaveBeenCalled();
  //       expect(mockResponse.status).toHaveBeenCalledWith(201);
  //       expect(mockResponse.json).toHaveBeenCalledWith(cars);
  //     });
  //   });

  describe("#handleCreateCar", () => {
    it("should call res.status(201) and res.json with car instance", async () => {
      const name = "Hello";
      const price = 100000;
      const size = "Small";
      const image = "contoh.png";

      const mockRequest = {
        body: {
          name,
          price,
          size,
          image,
          isCurrentlyRented: false,
        },
      };

      const car = new Car({ name, price, size, image });
      const mockCarModel = { create: jest.fn().mockReturnValue(car) };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const carController = new CarController({ carModel: mockCarModel });

      await carController.handleCreateCar(mockRequest, mockResponse);

      expect(mockCarModel.create).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(car);
    });

    it("should call res.status(422) and res.json with car instance", async () => {
      const err = new Error("Something");
      const name = "Hello";
      const price = 100000;
      const size = "Small";
      const image = "contoh.png";

      const mockRequest = {
        body: {
          name,
          price,
          size,
          image,
          isCurrentlyRented: false,
        },
      };

      const mockCarModel = {
        create: jest.fn().mockReturnValue(Promise.reject(err)),
      };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const carController = new CarController({ carModel: mockCarModel });

      await carController.handleCreateCar(mockRequest, mockResponse);

      expect(mockCarModel.create).toHaveBeenCalledWith({
        name,
        price,
        size,
        image,
        isCurrentlyRented: false,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(422);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    });
  });
  //   describe("#handleDeleteCar", () => {
  //     it("should call res.status(204)", async () => {
  //       const name = "Hello";
  //       const price = 100000;
  //       const size = "Small";
  //       const image = "contoh.png";

  //       const mockRequest = {
  //         params: {
  //           id: 1,
  //         },
  //       };

  //       const mockCar = new Car({ name, price, size, image });
  //       mockCar.destroy = jest.fn();

  //       const mockCarModel = {};
  //       mockCarModel.findByPk = jest.fn().mockReturnValue(mockCar);

  //       const mockResponse = {};
  //       mockResponse.status = jest.fn().mockReturnThis();
  //       mockResponse.end = jest.fn().mockReturnThis();

  //       const carController = new CarController({ carModel: mockCarModel });
  //       await carController.handleDeleteCar(mockRequest, mockResponse);

  //       expect(mockCarModel.findByPk).toHaveBeenCalledWith(1);
  //       expect(mockCar.destroy).toHaveBeenCalledWith();
  //       expect(mockResponse.status).toHaveBeenCalledWith(204);
  //       expect(mockResponse.end).toHaveBeenCalled();
  //     });
  //   });

  //   describe("#handleGetTask", () => {
  //     it("should call res.status(200) and res.json with task instance", async () => {
  //       const name = "Hello";
  //       const prompt = "World";

  //       const mockRequest = {
  //         params: {
  //           id: 1,
  //         },
  //       };

  //       const mockTask = new Task({ name, prompt });
  //       const mockTaskModel = {};
  //       mockTaskModel.findByPk = jest.fn().mockReturnValue(mockTask);

  //       const mockResponse = {};
  //       mockResponse.status = jest.fn().mockReturnThis();
  //       mockResponse.json = jest.fn().mockReturnThis();

  //       const taskController = new TaskController({ taskModel: mockTaskModel });
  //       await taskController.handleGetTask(mockRequest, mockResponse);

  //       expect(mockTaskModel.findByPk).toHaveBeenCalledWith(1);
  //       expect(mockResponse.status).toHaveBeenCalledWith(200);
  //       expect(mockResponse.json).toHaveBeenCalledWith(mockTask);
  //     });

  //     it("should call res.status(404) and res.json with error instance", async () => {
  //       const err = new Error("Not found!");

  //       const mockRequest = {
  //         params: {
  //           id: 1,
  //         },
  //       };

  //       const mockTaskModel = {};
  //       mockTaskModel.findByPk = jest.fn(() => Promise.reject(err));

  //       const mockResponse = {};
  //       mockResponse.status = jest.fn().mockReturnThis();
  //       mockResponse.json = jest.fn().mockReturnThis();

  //       const taskController = new TaskController({ taskModel: mockTaskModel });
  //       await taskController.handleGetTask(mockRequest, mockResponse);

  //       expect(mockTaskModel.findByPk).toHaveBeenCalledWith(1);
  //       expect(mockResponse.status).toHaveBeenCalledWith(404);
  //       expect(mockResponse.json).toHaveBeenCalledWith({
  //         error: {
  //           name: err.name,
  //           message: err.message,
  //         },
  //       });
  //     });
  //   });

  //   describe("#handleUpdateCar", () => {
  //     it("should call res.status(200) and res.json with Car instance", async () => {
  //       const name = "Hello";
  //       const price = 100000;
  //       const size = "Small";
  //       const image = "contoh.png";
  //       const car = 1;

  //       const mockRequest = {
  //         params: {
  //           id: car,
  //         },
  //         body: {
  //           name,
  //           price,
  //           size,
  //           image,
  //           isCurrentlyRented: false,
  //         },
  //       };

  //       const mockCar = new Car({ name, price, size, image });
  //       mockCar.update = jest.fn().mockReturnThis();

  //       const mockCarModel = {};
  //       mockCarModel.findByPk = jest.fn().mockReturnValue(mockCar);

  //       const mockResponse = {};
  //       mockResponse.status = jest.fn().mockReturnThis();
  //       mockResponse.json = jest.fn().mockReturnThis();

  //       const carController = new CarController({ carModel: mockCarModel });
  //       await carController.handleUpdateCar(mockRequest, mockResponse);

  //       expect(mockCarModel.findByPk()).toHaveBeenCalledWith(1);
  //       expect(mockCar.update).toHaveBeenCalledWith({ name, price, size, image });
  //       expect(mockResponse.status).toHaveBeenCalledWith(200);
  //       expect(mockResponse.json).toHaveBeenCalledWith(mockCar);
  //     });

  // it("should call res.status(422) and res.json with error instance", async () => {
  //   const err = new Error("Something");
  //   const name = "Hello";
  //   const price = 100000;
  //   const size = "Small";
  //   const image = "contoh.png";

  //   const mockRequest = {
  //     params: {
  //       id: 1,
  //     },
  //     body: {
  //       name,
  //       price,
  //       size,
  //       image,
  //       isCurrentlyRented: false,
  //     },
  //   };

  //   const mockCarModel = {};
  //   mockCarModel.findByPk = jest.fn(() => Promise.reject(err));

  //   const mockResponse = {};
  //   mockResponse.status = jest.fn().mockReturnThis();
  //   mockResponse.json = jest.fn().mockReturnThis();

  //   const carController = new CarController({ carModel: mockCarModel });
  //   await carController.handleUpdateCar(mockRequest, mockResponse);

  //   expect(mockCarModel.findByPk).toHaveBeenCalledWith(1);
  //   expect(mockResponse.status).toHaveBeenCalledWith(422);
  //   expect(mockResponse.json).toHaveBeenCalledWith({
  //     error: {
  //       name: err.name,
  //       message: err.message,
  //     },
  //   });
  // });
  //   });
});
