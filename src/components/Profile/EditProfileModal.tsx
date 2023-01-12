import {
  Modal,
  Stack,
  Grid,
  TextInput,
  NumberInput,
  Select,
  Button,
  Textarea,
} from "@mantine/core";
import React, { useEffect } from "react";
import { allColleges } from "../../data/college";
import { allCourses } from "../../data/course";
import { allFaculties } from "../../data/faculty";
import useUpdateUser from "../../hooks/useUpdateUser";
import type { UserUpdateOutputType } from "../../types/user.type";
function EditProfileModal({
  userData,
  opened,
  setOpened,
}: {
  userData: UserUpdateOutputType;
  opened: boolean;
  setOpened: (opened: boolean) => void;
}) {
  const { setValues, submit, getInputProps, disable } = useUpdateUser({
    onSuccess: () => setOpened(false),
  });

  useEffect(() => {
    if (userData) {
      setValues({
        name: userData.name || "",
        age: userData.age || undefined,
        bio: userData.bio || "",
        studyMode: userData.studyMode || "FULLTIME",
        college: userData.college || "",
        course: userData.course || "",
        faculty: userData.faculty || "",
        phoneNo: userData.phoneNo || "",
        image: userData.image || "",
        backgroundImage: userData.backgroundImage || "",
      });
    }
  }, [setValues, userData]);

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Edit Profile"
      size="35%"
      centered
    >
      <form onSubmit={submit()}>
        <Stack>
          <Grid>
            <Grid.Col span={8}>
              <TextInput
                withAsterisk
                label="Name"
                {...getInputProps("name")}
              ></TextInput>
            </Grid.Col>
            <Grid.Col span={4}>
              <NumberInput withAsterisk label="Age" {...getInputProps("age")} />
            </Grid.Col>
          </Grid>
          <Select
            searchable
            label="Residential College"
            {...getInputProps("college")}
            data={allColleges.map(({ college }) => ({
              label: college,
              value: college,
            }))}
          />
          <Grid>
            <Grid.Col span={6}>
              <Select
                searchable
                label="Faculty"
                {...getInputProps("faculty")}
                data={allFaculties.map(({ faculty }) => ({
                  label: faculty,
                  value: faculty,
                }))}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                searchable
                label="Course"
                {...getInputProps("course")}
                data={allCourses.map(({ course }) => ({
                  label: course,
                  value: course,
                }))}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={6}>
              <Select
                label="Study Mode"
                data={[
                  { label: "Full-Time", value: "FULLTIME" },
                  { label: "Part-Time", value: "PARTTIME" },
                ]}
                {...getInputProps("studyMode")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                maxLength={10}
                label="Phone Number"
                {...getInputProps("phoneNo")}
              />
            </Grid.Col>
          </Grid>
          <Textarea label="Bio" {...getInputProps("bio")} />
          <Button disabled={disable} type="submit" color="teal.6">
            Update Profile
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}

export default EditProfileModal;
