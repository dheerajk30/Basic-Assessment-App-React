import React from "react";
import axios from "axios";
import { Item } from "./Item";

export class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: 0,
      pageNumber: 0,
      pageSize: 0,
      totalPages: 0,
      data: [
        {
          id: 1109,
          accountId: 6,
          hash: "2da8e2a7fcd1060b6c3127ec9dab924136d3bf6b",
          slug: "active-listening",
          title: "Active Listening",
          contentType: "ASSESSMENT",
          visibility: "PUBLIC",
          coverImage: {
            id: 1938,
            hash: "a166470be7011d76f69584a1aecf5d6d32fa618a",
            title: "assessment image",
            altText: "assessment image",
            imgUrl:
              "https://s3.ap-south-1.amazonaws.com/seekify-ets-transcoded/1579678891573-Banner_4.jpg",
            default: false,
          },
          active: false,
          duration: 15,
          status: "PUBLISHED",
          standalone: true,
          author: "SafeJob admin",
          description:
            "What is active listening? We all hear people, but are we really listening? Active listening is an exercise that requires you to truly take in and comprehend what the person speaking is communicating. Are you able to be a true active listener?",
          updateDate: 1597131834000,
          selfOwned: true,
          inviteOnly: false,
          ekey: "CT-6-1109",
        },
        {
          id: 1418,
          accountId: 6,
          hash: "ecbaececac82c1aff35acdc1723da0e7367c0daa",
          slug: "certificate-in-behaviour-soft-skil",
          title: "Certificate in Behaviour & Soft Skil",
          contentType: "LEARNING_PATH",
          visibility: "PUBLIC",
          coverImage: {
            id: 4781,
            hash: "9290ab8dd4d699a0c6f521938c1e185b58d32e92",
            title: "seekify content default image 4",
            altText: "seekify content default image 4",
            imgUrl:
              "https://seekify-ets-transcoded.s3.ap-south-1.amazonaws.com/seekify_default_image_4.jpg",
            default: true,
          },
          active: false,
          duration: 2712,
          cost: 0,
          status: "PUBLISHED",
          standalone: true,
          author: "SafeJob admin",
          description:
            "When you first start applying to jobs, it can be difficult for you to try and figure out what employers are looking for. But no matter what kind of position or employer you’re looking for, there are a handful of skills, both soft and hard, that can boost your chances of getting selected almost anywhere. The Certificate program in behaviour & soft skills will take you through a set of important video lessons which will equip you to improve your critical behaviours and soft skills required to display in your workplace.",
          shortDescription: "I am short desc.",
          tags: [
            {
              id: 1616,
              hash: "318c1ac8b2a006e60bfd82342f5590b5fe4523ed",
              name: "trending_coursess",
              active: true,
              hidden: false,
              tagFamily: {
                id: 7,
                hash: "beda09a7fe2149b0ce76efeddd70ba44908ebbb4",
                name: "CONTENT TYPEE",
                slug: "content-type-1",
                description: "Content Type",
                applicableFor: 0,
                protectedTagFamily: false,
              },
              slug: "trending-coursess",
              ekey: "TA-6-1616",
            },
            {
              id: 65,
              hash: "54fad9f58f9764ac9d66cd40b0fe09e5ad2b8273",
              name: "Behaviour & Soft Skills",
              active: true,
              hidden: false,
              tagFamily: {
                id: 36,
                hash: "9b7710cb4e583a00f49e4f5b44e20a973a649d86",
                name: "Default",
                slug: "default",
                description: "Default tag family",
                applicableFor: 20,
                protectedTagFamily: true,
              },
              slug: "behaviour-soft-skills",
              ekey: "TA-6-65",
            },
            {
              id: 1441,
              hash: "7db95f347f378261693b1dc9c47e7a0675b255ba",
              name: "certificate",
              active: true,
              hidden: false,
              tagFamily: {
                id: 36,
                hash: "9b7710cb4e583a00f49e4f5b44e20a973a649d86",
                name: "Default",
                slug: "default",
                description: "Default tag family",
                applicableFor: 20,
                protectedTagFamily: true,
              },
              slug: "certificate",
              ekey: "TA-6-1441",
            },
            {
              id: 1636,
              hash: "5267ace851bb14c0208ed1d50bc8a24c6116b6d1",
              name: "Job Readiness",
              active: true,
              hidden: false,
              tagFamily: {
                id: 49,
                hash: "a10450fc5eabf86511bee3bb6b6125ddb3c5e60c",
                name: "explore",
                slug: "explore",
                description: "explore tags",
                applicableFor: 0,
                protectedTagFamily: false,
              },
              slug: "job-readiness",
              description: "Job Readiness-desc",
              ekey: "TA-6-1636",
            },
            {
              id: 1639,
              hash: "0284e9a6155df954343a6f9162af071ee050d162",
              name: "trending_courses",
              active: true,
              hidden: false,
              tagFamily: {
                id: 7,
                hash: "beda09a7fe2149b0ce76efeddd70ba44908ebbb4",
                name: "CONTENT TYPEE",
                slug: "content-type-1",
                description: "Content Type",
                applicableFor: 0,
                protectedTagFamily: false,
              },
              slug: "trending-courses",
              ekey: "TA-6-1639",
            },
            {
              id: 1642,
              hash: "d2fb173853d839c59b50d283e1fb2479a2a8f4bf",
              name: "trending_courses",
              active: true,
              hidden: false,
              tagFamily: {
                id: 50,
                hash: "7620bbc5e3a705b33d95344474bf2026c070cc1c",
                name: "content type",
                slug: "content-type",
                description: "content type",
                applicableFor: 0,
                protectedTagFamily: false,
              },
              slug: "trending-courses",
              ekey: "TA-6-1642",
            },
            {
              id: 1645,
              hash: "ba23cf699d1266211c5a6052dfc25e59af4032b9",
              name: "beginner",
              active: true,
              hidden: false,
              tagFamily: {
                id: 51,
                hash: "40c43b05cbda9bd30a61f75ceab715b6f4d68a88",
                name: "Difficulty Level",
                slug: "difficulty-level",
                description: "tag family for level",
                applicableFor: 0,
                protectedTagFamily: false,
              },
              slug: "beginner",
              ekey: "TA-6-1645",
            },
          ],
          groupToTags: {
            default: [
              {
                id: 65,
                accountId: 6,
                hash: "54fad9f58f9764ac9d66cd40b0fe09e5ad2b8273",
                name: "Behaviour & Soft Skills",
                active: true,
                tagFamilyHash: "9b7710cb4e583a00f49e4f5b44e20a973a649d86",
                tagFamilyId: 36,
                slug: "behaviour-soft-skills",
                key: "TA-6-65",
              },
              {
                id: 1441,
                accountId: 6,
                hash: "7db95f347f378261693b1dc9c47e7a0675b255ba",
                name: "certificate",
                active: true,
                tagFamilyHash: "9b7710cb4e583a00f49e4f5b44e20a973a649d86",
                tagFamilyId: 36,
                slug: "certificate",
                key: "TA-6-1441",
              },
            ],
            explore: [
              {
                id: 1636,
                accountId: 6,
                hash: "5267ace851bb14c0208ed1d50bc8a24c6116b6d1",
                name: "Job Readiness",
                active: true,
                tagFamilyHash: "a10450fc5eabf86511bee3bb6b6125ddb3c5e60c",
                tagFamilyId: 49,
                slug: "job-readiness",
                description: "Job Readiness-desc",
                key: "TA-6-1636",
              },
            ],
            "content-type": [
              {
                id: 1642,
                accountId: 6,
                hash: "d2fb173853d839c59b50d283e1fb2479a2a8f4bf",
                name: "trending_courses",
                active: true,
                tagFamilyHash: "7620bbc5e3a705b33d95344474bf2026c070cc1c",
                tagFamilyId: 50,
                slug: "trending-courses",
                key: "TA-6-1642",
              },
            ],
            "difficulty-level": [
              {
                id: 1645,
                accountId: 6,
                hash: "ba23cf699d1266211c5a6052dfc25e59af4032b9",
                name: "beginner",
                active: true,
                tagFamilyHash: "40c43b05cbda9bd30a61f75ceab715b6f4d68a88",
                tagFamilyId: 51,
                slug: "beginner",
                key: "TA-6-1645",
              },
            ],
            "content-type-1": [
              {
                id: 1616,
                accountId: 6,
                hash: "318c1ac8b2a006e60bfd82342f5590b5fe4523ed",
                name: "trending_coursess",
                active: true,
                tagFamilyHash: "beda09a7fe2149b0ce76efeddd70ba44908ebbb4",
                tagFamilyId: 7,
                slug: "trending-coursess",
                key: "TA-6-1616",
              },
              {
                id: 1639,
                accountId: 6,
                hash: "0284e9a6155df954343a6f9162af071ee050d162",
                name: "trending_courses",
                active: true,
                tagFamilyHash: "beda09a7fe2149b0ce76efeddd70ba44908ebbb4",
                tagFamilyId: 7,
                slug: "trending-courses",
                key: "TA-6-1639",
              },
            ],
          },
          groups: {
            default: {
              id: 36,
              hash: "9b7710cb4e583a00f49e4f5b44e20a973a649d86",
              name: "Default",
              slug: "default",
              description: "Default tag family",
              applicableFor: 20,
              protectedTagFamily: true,
            },
            explore: {
              id: 49,
              hash: "a10450fc5eabf86511bee3bb6b6125ddb3c5e60c",
              name: "explore",
              slug: "explore",
              description: "explore tags",
              applicableFor: 0,
              protectedTagFamily: false,
            },
            "content-type": {
              id: 50,
              hash: "7620bbc5e3a705b33d95344474bf2026c070cc1c",
              name: "content type",
              slug: "content-type",
              description: "content type",
              applicableFor: 0,
              protectedTagFamily: false,
            },
            "difficulty-level": {
              id: 51,
              hash: "40c43b05cbda9bd30a61f75ceab715b6f4d68a88",
              name: "Difficulty Level",
              slug: "difficulty-level",
              description: "tag family for level",
              applicableFor: 0,
              protectedTagFamily: false,
            },
            "content-type-1": {
              id: 7,
              hash: "beda09a7fe2149b0ce76efeddd70ba44908ebbb4",
              name: "CONTENT TYPEE",
              slug: "content-type-1",
              description: "Content Type",
              applicableFor: 0,
              protectedTagFamily: false,
            },
          },
          updateDate: 1597131324000,
          selfOwned: true,
          inviteOnly: false,
          ekey: "CT-6-1418",
        },
      ],
    };
  }

  componentDidMount() {
    axios
      .post(
        "https://safejob.stagseekify.com/spark/public/api/content/filter",
        {
          contentStatuses: ["PUBLISHED"],
          title: "",
          contentTypes: [],
          tagHashes: [],
        },
        {
          headers: {
            "Content-Type": "application/json"
             
          },
        }
      )
      .then((res) => {
      })
      .catch((err) => {
      });
  }

  renderItems=()=>{
    return this.state.data.map((item) => {
      return <Item item={item}></Item>;
    });
  }

  render() {
    return (
      <div>
        <div>List of Component</div> {this.renderItems()}
      </div>
    );
  }
}
