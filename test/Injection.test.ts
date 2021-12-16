// tslint:disable-next-line no-implicit-dependencies
import { assert } from "chai";
import path from "path";
import { ExampleHardhatRuntimeEnvironmentField } from "../src/ExampleHardhatRuntimeEnvironmentField";
import { useEnvironment } from "./helpers";



describe("SDK Integration test", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");

    it("--------------------------->", async function () {
      // const boom = await this.hre.sdk;
      console.log(`process.env  ----> `, this.hre.network)
      assert.instanceOf(
        this.hre,
        ExampleHardhatRuntimeEnvironmentField
      );
    });

    it("The example filed should say hello", function () {
      assert.equal(this.hre.example.sayHello(), "hello");
    });
  });

  describe("HardhatConfig extension", function () {
    useEnvironment("hardhat-project");

    it("Should add the newPath to the config", function () {
      assert.equal(
        this.hre.config.paths.newPath,
        path.join(process.cwd(), "asd")
      );
    });
  });
});

describe("Unit tests examples", function () {
  describe("ExampleHardhatRuntimeEnvironmentField", function () {
    describe("sayHello", function () {
      it("Should say hello", function () {
        const field = new ExampleHardhatRuntimeEnvironmentField();
        assert.equal(field.sayHello(), "hello");
      });
    });
  });
});
